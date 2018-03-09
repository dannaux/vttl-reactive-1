import { IPAddress } from '../common/Constants';

export default class DBTrainerLoader {

      loadTrainer(vttlId, callBackFunction) {
        url = 'http://'+IPAddress+':9000/trainer.php?vttlid='+vttlId;

        console.log( "Loading trainer from: "+url);

        return fetch( url )
        .then((response) => response.json())
        .then((responseJson) => {
            callBackFunction(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
      }
}