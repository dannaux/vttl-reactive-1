import { IPAddress } from '../config/Constants';

export default class DBTrainerLoader {

      loadTrainer(vttlId, callBackFunction) {
        url = 'http://'+IPAddress+':9000/trainer.php?vttlid='+vttlId;
        this.loadURLAndPassToCallBackFunction(url, callBackFunction);
      }

      loadTrainerList(callBackFunction)  {
        url = 'http://'+IPAddress+':9000/trainerlist.php';
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
}