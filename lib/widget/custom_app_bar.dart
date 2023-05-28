import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CustomAppBar extends StatefulWidget implements PreferredSizeWidget {
  final String title;
  final bool showSearchBar;
  final bool isSubPage;
  final Color screenColor;

  const CustomAppBar({
    this.title = '',
    this.isSubPage = false,
    this.showSearchBar = false,
    required this.screenColor,
    Key? key,
  }) : super(key: key);

  @override
  State<CustomAppBar> createState() => _CustomAppBarState();

  @override
  Size get preferredSize => const Size.fromHeight(68);
}

class _CustomAppBarState extends State<CustomAppBar> {
  String deviceId = '';
  late bool isBluetoothOn = false;
  void changeStatusBarColor(Color color) {
    SystemChrome.setSystemUIOverlayStyle(
      SystemUiOverlayStyle(statusBarColor: color),
    );
  }

  @override
  void initState() {
    super.initState();
    changeStatusBarColor(widget.screenColor);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(
        top: 12,
        left: 12,
        right: 12,
      ),
      color: widget.screenColor,
      child: Material(
        elevation: 8,
        borderRadius: BorderRadius.circular(32),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            if (widget.isSubPage)
              IconButton(
                icon: const Icon(Icons.arrow_back_ios),
                onPressed: () {
                  Navigator.pop(context);
                },
              )
            else
              Row(
                children: [
                  const SizedBox(
                    width: 16,
                  ),
                  Text(
                    widget.title,
                    style: const TextStyle(
                      fontFamily: 'Popins',
                      fontSize: 20,
                      color: Colors.black,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ],
              ),
            Row(
              children: [
                IconButton(
                  icon: const Icon(Icons.gps_fixed),
                  onPressed: () {},
                ),
                IconButton(
                  icon: isBluetoothOn
                      ? const Icon(Icons.bluetooth)
                      : const Icon(Icons.bluetooth_disabled),
                  onPressed: () {},
                ),
                Text(deviceId),
                IconButton(
                  icon: const Icon(Icons.notifications),
                  onPressed: () {},
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
