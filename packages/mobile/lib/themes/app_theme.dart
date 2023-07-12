import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:polar_hr_devices/data/colors_pallete_hex.dart';
class ThemeManager extends GetxController {
  final _isDarkMode = Get.isDarkMode;
  final _screenHeight = Get.height;
  final _screenWidth = Get.width;

  get isDarkMode => _isDarkMode;
  get screenHeight => _screenHeight;
  get screenWidth => _screenWidth;
  void changeTheme() {
    isDarkMode.value = !isDarkMode.value;
    Get.changeThemeMode(isDarkMode.value ? ThemeMode.dark : ThemeMode.light);
  }
}
class AppTheme {

  static ThemeData lightTheme = ThemeData.light().copyWith(
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          textStyle: const TextStyle(
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
          foregroundColor: Get.isDarkMode ? Colors.black : Colors.white,
          backgroundColor: ColorPalette.crimsonRed,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          padding: const EdgeInsets.symmetric(vertical: 16),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        prefixIconColor: MaterialStateColor.resolveWith((states) =>
            states.contains(MaterialState.focused)
                ? Colors.black
                : Colors.grey),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        labelStyle: TextStyle(fontFamily: 'Poppins', color: Colors.grey),
        hintStyle: TextStyle(
            fontFamily: 'Poppins',
            color: Get.isDarkMode ? Colors.white : Colors.black),
        floatingLabelStyle:
            TextStyle(color: Get.isDarkMode ? Colors.white : Colors.black),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: BorderSide(
              width: 1, color: Get.isDarkMode ? Colors.white : Colors.black),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: BorderSide(width: 3, color: Colors.grey.withOpacity(0.5)),
        ),
      ),
      useMaterial3: true,
      primaryColorDark: ColorPalette.black,
      primaryColorLight: ColorPalette.black00,
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.black,
        ),
      ),
      iconTheme: const IconThemeData(
        color: Colors.black,
      ),
      brightness: Brightness.light,
      scaffoldBackgroundColor: const Color(0xFFF9F8FD),
      primaryColor: ColorPalette.crimsonRed,
      highlightColor: Colors.transparent,
      splashColor: const Color(0xFF262626),
      textTheme: const TextTheme(
        displayLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 32,
          fontWeight: FontWeight.bold,
        ),
        displayMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 24,
          fontWeight: FontWeight.bold,
        ),
        displaySmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
        headlineLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
        headlineMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 14,
          fontWeight: FontWeight.bold,
        ),
        headlineSmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 12,
          fontWeight: FontWeight.bold,
        ),
        bodyLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 16,
          fontWeight: FontWeight.normal,
        ),
        bodyMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 14,
          fontWeight: FontWeight.normal,
        ),
        bodySmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 12,
          fontWeight: FontWeight.normal,
        ),
        labelLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 16,
          fontWeight: FontWeight.w300,
        ),
        labelMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 14,
          fontWeight: FontWeight.w300,
        ),
        labelSmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.black,
          fontSize: 12,
          fontWeight: FontWeight.w300,
        ),
      ));

  static ThemeData darkTheme = ThemeData.dark().copyWith(
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          textStyle: const TextStyle(
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
          foregroundColor: Get.isDarkMode ? Colors.black : Colors.white,
          backgroundColor: ColorPalette.crimsonRed,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          padding: const EdgeInsets.symmetric(vertical: 16),
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        prefixIconColor: MaterialStateColor.resolveWith((states) =>
            states.contains(MaterialState.focused)
                ? Colors.white
                : Colors.grey),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        labelStyle: TextStyle(
            fontFamily: 'Poppins', color: Colors.grey.withOpacity(0.5)),
        hintStyle: TextStyle(
            fontFamily: 'Poppins',
            color: Get.isDarkMode ? Colors.black : Colors.white),
        floatingLabelStyle:
            TextStyle(color: Get.isDarkMode ? Colors.black : Colors.white),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: BorderSide(
              width: 1, color: Get.isDarkMode ? Colors.black : Colors.white),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8),
          borderSide: BorderSide(width: 3, color: Colors.grey.withOpacity(0.5)),
        ),
      ),
      useMaterial3: true,
      primaryColorDark: ColorPalette.black00,
      primaryColorLight: ColorPalette.black,
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        iconTheme: IconThemeData(
          color: Colors.white,
        ),
      ),
      iconTheme: const IconThemeData(
        color: Colors.white,
      ),
      brightness: Brightness.dark,
      scaffoldBackgroundColor: const Color(0xFF262626),
      primaryColor: ColorPalette.crimsonRed,
      highlightColor: Colors.transparent,
      splashColor: const Color(0xFF262626),
      textTheme: const TextTheme(
        displayLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 32,
          fontWeight: FontWeight.bold,
        ),
        displayMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.bold,
        ),
        displaySmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 18,
          fontWeight: FontWeight.bold,
        ),
        headlineLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
        headlineMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 14,
          fontWeight: FontWeight.bold,
        ),
        headlineSmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 12,
          fontWeight: FontWeight.bold,
        ),
        bodyLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.normal,
        ),
        bodyMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 14,
          fontWeight: FontWeight.normal,
        ),
        bodySmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 12,
          fontWeight: FontWeight.normal,
        ),
        labelLarge: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 16,
          fontWeight: FontWeight.w300,
        ),
        labelMedium: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 14,
          fontWeight: FontWeight.w300,
        ),
        labelSmall: TextStyle(
          fontFamily: 'Poppins',
          color: Colors.white,
          fontSize: 12,
          fontWeight: FontWeight.w300,
        ),
      ));
}
