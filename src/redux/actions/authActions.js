import Moment from 'moment'
import { Toast } from 'native-base'
import { Request, setToken } from "../services"
import { navigate } from "../services/navigator"
import { firebase } from '../../constants'
import { parseInt } from 'lodash'

export const GetDate = () =>{
  let date = new Date();
  let createdAt = Moment(date).format('DD-MMM-YYYY hh:mm:ss');
  let coredate = date.getTime();
  let unixdate = new Date('2001/01/01').getTime();
  let createdAtSeconds = Math.floor((coredate-unixdate)/1000).toString();
  return { createdAt, createdAtSeconds }
}

export const GetDate1 = (date) =>{
  let coredate = parseInt(date);
  let unixdate = new Date('2001/01/01').getTime();
  let createdAtSeconds = new Date(coredate*1000+unixdate)
  return createdAtSeconds
}

export const upload = async(uri, path) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase.storage().ref().child('profile_images').child(path).child(`${path}.jpg`);
  await ref.put(blob);
  return await ref.getDownloadURL();
}

export const updateProfile = () => async ( dispatch, getState ) => {
  const uid = getState().auth.user.uid;
  const usersRef = firebase.firestore().collection('users')
  usersRef
    .doc(uid)
    .get()
    .then(firestoreDocument => {
      const user = firestoreDocument.data()
      user.uid = uid
      dispatch({ type: "UPDATE_PROFILE", payload: user })
    })
    .catch(error => {
      alert(error)
    });
}

export const Login = ({email, password, loginMethod}) => async ( dispatch ) => {
  dispatch({ type: "LOGIN", payload:{email, password}, loginMethod, screen:'DashboardScreen' })
}

export const ScreenFormat = ({}) => async ( dispatch ) => {
  dispatch({ type: "SCREENFORMAT" })
}

export const CreateAccount = ({email, password, loginMethod}) => async ( dispatch ) => {
  dispatch({ type: "LOGIN", payload:{email, password}, loginMethod })
}

export const Logins = ({email, password}) => async ( dispatch ) => {
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((response) => {
    const uid = response.user.uid
    const usersRef = firebase.firestore().collection('users')
    usersRef
      .doc(uid)
      .get()
      .then(firestoreDocument => {
        if (!firestoreDocument.exists) {
          return Toast.show({ text: `User does not exist anymore.`, buttonText: "Okay", type: "danger" })
        }else{
          const user = firestoreDocument.data()
          user.uid = uid
          dispatch({ type: "LOGIN", payload: user })
        }
      })
      .catch(error => {
        alert(error)
      });
    })
  .catch(error => {
    alert(error)
  })
}

export const Register = (req) => async ( dispatch ) => {
  await firebase
  .auth()
  .createUserWithEmailAndPassword(req.email, req.password)
  .then(async (response) => {
    const uid = response.user.uid
    let url = await upload(req.profile_image, uid)
    const data = {
      id: uid, 
      birthday: req.birthday,
      country: req.country,
      email: req.email,
      first_name: req.firstname,
      gender: req.gender,
      isDispensary: false,
      last_name: req.lastname,
      profile_image:url,
      username:req.username,
      ...GetDate()
    };
    console.log('data', data)
    const usersRef = firebase.firestore().collection('users')
    usersRef
      .doc(uid)
      .set(data)
      .then(() => {
        dispatch({ type: "LOGIN", payload: data })
      })
      .catch((error) => {
        alert(error)
      });
  })
  .catch((error) => {
    alert(error)
  });
}

export const DispensaryRegister = (req) => async ( dispatch ) => {
  const { dispensary_name, full_address, email, address, city, country, lat, lon, state, zip, profile_image, password } = req;
  await firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(async (response) => {
    const uid = response.user.uid;
    let url = await upload(profile_image, uid)
    const data = {
      id: uid,
      dispensary_name,
      full_address,
      email,

      address,
      city,
      country,
      lat,
      lon,
      state,
      zip,

      profile_image:url,
      isDispensary: true,
      isDispensaryVerified: false,
      ...GetDate()
    };
    console.log('data', data)
    const usersRef = firebase.firestore().collection('users')
    usersRef
      .doc(uid)
      .set(data)
      .then(() => {
        dispatch({ type: "LOGIN", payload: data })
      })
      .catch((error) => {
        alert(error)
      });
  })
  .catch((error) => {
    alert(error)
  });
}

export const sendMail = (req) => async ( dispatch ) => {
  return await Request('post',"users/sendmail", req)
  .then(async (res) => {
    if(res.status){
      dispatch({ type: "MEIL_DATA", payload: req.email })
      navigate('VerificationScreen')
    }else{
      alert(res.message)
    }
  })
}

export const forgetPassword = (token) => async ( dispatch, getState ) => {
  let req = { token, email:getState().auth.email }
  return await Request('post',"users/forgetpassword", req)
  .then(async (res) => {
    if(res.status){
      navigate('ResetpasswordScreen')
    }else{
      alert(res.message)
    }
  })
}

export const resetPassword = (password) => async ( dispatch, getState ) => {
  let req = { password, email:getState().auth.email }
  return await Request('post',"users/resetpassword", req)
  .then(async (res) => {
    if(res.status){
      navigate('SignInScreen')
    }else{
      alert(res.message)
    }
  })
}


export const logOut = () => async ( dispatch ) => {
  setToken('')
  // firebase.auth().signOut()
  return dispatch({type:"LOGOUT"})
}

export const usersUpdate = (req, id) => async () => {
  return await Request('put',`users/${id}`,req)
  .then(res => {
    alert('Success')
  })
  .catch(err => console.log(err))
}

export const userinfoLoad = (req) => async (dispatch) => {
  return await Request('get',`users/${req.id}`)
  .then(res => {
    dispatch({ type: "LOGIN", payload: res })
  })
  .catch(err => console.log(err))
}