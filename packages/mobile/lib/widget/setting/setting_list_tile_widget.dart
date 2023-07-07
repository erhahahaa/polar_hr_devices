import 'package:flutter/material.dart';
import 'package:polar_hr_devices/data/colors_pallete_hex.dart';
import 'package:polar_hr_devices/widget/custom_text.dart';

class SettingListTileWidget extends StatelessWidget {
  final String title;
  final String subtitle;
  final bool showSubtitle;
  final bool showLeading;
  final Widget leading;
  final Widget trailing;
  final VoidCallback onTap;
  const SettingListTileWidget({
    super.key,
    required this.title,
    this.subtitle = '',
    this.showSubtitle = false,
    required this.onTap,
    this.leading = const SizedBox(),
    this.trailing = const Icon(
      Icons.arrow_forward_ios,
      color: ColorPalette.black50,
      size: 16,
    ),
    this.showLeading = false,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: onTap,
      leading: showLeading ? leading : null,
      title: CustomText(
        text: title,
        fontSize: 14,
      ),
      subtitle: showSubtitle
          ? CustomText(
              text: subtitle,
              color: ColorPalette.black50,
              fontSize: 12,
            )
          : null,
      trailing: trailing,
    );
  }
}