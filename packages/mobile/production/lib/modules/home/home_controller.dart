import 'package:get/get.dart';
import 'package:hatofit/utils/preferences_provider.dart';
import 'package:intl/intl.dart';

class HomeController extends GetxController {
  final _prefs = PreferencesProvider();
  final title = 'Hi'.obs;
  final String formattedDate = DateFormat('d MMMM yyyy').format(DateTime.now());

  @override
  void onInit() async {
    final f = (await _prefs.getFirstName())!;
    final l = (await _prefs.getLastName())!;
    title.value = 'Hi, $f $l 👋';
    super.onInit();
  }
}
