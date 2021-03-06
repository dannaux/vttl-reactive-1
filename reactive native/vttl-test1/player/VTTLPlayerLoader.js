export default class VTTLPlayerLoader {

  loadPlayer(uniqueIndex, callBackFunction, ) {
    var self = this;
    var soap = require('soap-everywhere');
    var url = 'http://api.vttl.be/0.7/?WSDL';
    var args = { Season: 18, UniqueIndex: uniqueIndex, WithResults: 'TRUE'};

      soap.createClient(url, function(err, client) {
          client.GetMembers(args, function(err, response) {
            let answer = self.convertPlayerResponse(response);
            callBackFunction(answer);
          });
      });
  }

  convertPlayerResponse(playerResponse) {
    return this.convertPlayer(playerResponse.MemberEntries[0]);
  }

  convertPlayer(player) {
    var self = this;
    return {
      FirstName: player.FirstName,
      LastName: player.LastName,
      Ranking: player.Ranking,
      UniqueIndex: player.UniqueIndex,
      RankResults: self.convertResults(player.ResultEntries)
    }
  }

  convertResults(results) {
    var accumulateResultPerRanking = (rankResults, result, index) => {
      if (index == 1) {
        rankResults = {};
      }
      if (rankResults[result.Ranking] == undefined) {
        rankResults[result.Ranking] = {
          win: 0,
          loss: 0
        };
      }
      if (result.Result == 'D' ) {
        rankResults[result.Ranking].loss++;
      }
      else {
        rankResults[result.Ranking].win++;
      }
      return rankResults;
    };

    return results.reduce(accumulateResultPerRanking);
  }
}
