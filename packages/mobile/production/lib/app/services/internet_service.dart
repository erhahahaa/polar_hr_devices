

class InternetService {
  // final _getConnect = GetConnect();

  // GetConnect get getConnect => _getConnect;

  // final _prefs = PreferencesProvider();

  // Future postSession(dynamic body) async {
  //   final token = await _prefs.getUserToken();
  //   try {
  //     final response = await _getConnect.post(
  //       " /session",
  //       jsonEncode(body),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer $token',
  //       },
  //     );
  //     if (response.statusCode == 200) {
  //       return response.body;
  //     } else {
  //       return response.body;
  //     }
  //   } catch (e) {
  //     return e;
  //   }
  // }

  // Future<List<Exercise>> fetchExercises() async {
  //   const url = " exercise";
  //   print('url: $url');
  //   final response = await _getConnect.get(url);
  //   try {
  //     if (response.statusCode == 200) {
  //       final List<dynamic> jsonResponse = response.body['exercises'];
  //       StorageService().saveToJSON('exercise/exercise', jsonResponse);
  //       return jsonResponse.map<Exercise>((json) {
  //         return Exercise.fromJson(json);
  //       }).toList();
  //     } else {
  //       List<dynamic> jsonResponse =
  //           await StorageService().readFromJSON('exercise/exercise');
  //       return jsonResponse.map<Exercise>((json) {
  //         return Exercise.fromJson(json);
  //       }).toList();
  //     }
  //   } catch (e) {
  //     return List<Exercise>.empty();
  //   }
  // }

  // Future<List<dynamic>> fetchHistory() async {
  //   final token = await _prefs.getUserToken();
  //   try {
  //     final response = await _getConnect.get(" session", headers: {
  //       'Authorization': 'Bearer $token',
  //     });
  //     if (response.statusCode == 200) {
  //       final List<dynamic> jsonResponse = response.body['sessions'];
  //       return jsonResponse;
  //     } else {
  //       return List<dynamic>.empty();
  //     }
  //   } catch (e) {
  //     return List<dynamic>.empty();
  //   }
  // }

  // Future<Map<String, dynamic>> fetchReport(String exerciseId) async {
  //   final url = " /report/$exerciseId";

  //   final response = await _getConnect.get(url);
  //   try {
  //     if (response.statusCode == 200) {
  //       Map<String, dynamic> jsonResponse = response.body;

  //       return jsonResponse;
  //     } else {
  //       return List<dynamic>.empty() as Map<String, dynamic>;
  //     }
  //   } catch (e) {
  //     return List<dynamic>.empty() as Map<String, dynamic>;
  //   }
  // }
}
