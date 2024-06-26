import { messaging } from './Firebase'

export const Request = async () => {
        try{
             await Notification.requestPermission()
             const token = await messaging.getToken({vapidkey : 'BNkIJH1-nsyESI8YDlbeShXi1dVbXEzz9fKsvpV8btBGuo2NEsxxD8R-XAmF6Fbx9rPeCW6h-aLEe2bSOIBK9nI'})

             console.log('user token ' , token)

             return token

        }
        catch(error){
            console.log(error)
        }
}
