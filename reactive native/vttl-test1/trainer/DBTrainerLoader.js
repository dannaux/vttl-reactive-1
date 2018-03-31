import { DBIPAddress } from '../config/Constants';
import { DBPort } from '../config/Constants';

export default class DBTrainerLoader {

      loadTrainer(vttlId, callBackFunction) {
        url = this.createBaseUrl()+'trainer.php?vttlid='+vttlId;
        this.loadURLAndPassToCallBackFunction(url, callBackFunction);
      }

      loadTrainerList(callBackFunction)  {
        url = this.createBaseUrl()+'trainerlist.php';
        this.loadURLAndPassToCallBackFunction(url, callBackFunction);
      }

      loadURLAndPassToCallBackFunction(url, callBackFunction) {
        return fetch( url )
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(url);
            console.log(responseJson);
            callBackFunction(responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
      }

      createBaseUrl() {
        baseUrl = 'http://'+DBIPAddress;
        if ( DBPort ) {
          baseUrl = baseUrl + ':' + DBPort;
        }
        return baseUrl + '/';
      }
}