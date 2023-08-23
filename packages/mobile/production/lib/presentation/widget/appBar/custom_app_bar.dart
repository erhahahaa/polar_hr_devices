import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';

import '../../../app/app.dart';
import '../../../app/services/bluetooth_service.dart';
import '../../../app/themes/app_theme.dart';
import '../../../app/themes/colors_constants.dart';
import '../../../data/models/polar_device.dart';

class CustomAppBar extends StatefulWidget implements PreferredSizeWidget {
  final String title;
  final bool showSearchBar;
  final bool isSubPage;
  final Color screenColor;
  const CustomAppBar({
    this.title = '',
    this.isSubPage = false,
    this.showSearchBar = false,
    this.screenColor = Colors.transparent,
    Key? key,
  }) : super(key: key);
  @override
  State<CustomAppBar> createState() => _CustomAppBarState();
  @override
  Size get preferredSize => const Size.fromHeight(56.0);
}

class _CustomAppBarState extends State<CustomAppBar> {
  final bluetoothService = Get.put(BluetoothService());
  final isDarkMode = Get.isDarkMode;

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: widget.isSubPage
          ? IconButton(
              icon: const Icon(Icons.arrow_back_ios),
              onPressed: () {
                Navigator.pop(context);
              },
            )
          : null,
      title: widget.isSubPage
          ? null
          : Text(widget.title, style: Theme.of(context).textTheme.displaySmall),
      actions: [
        Obx(
          () => IconButton(
            icon: bluetoothService.isAdptrOn.value
                ? Icon(
                    FontAwesomeIcons.bluetooth,
                    color: bluetoothService.isAdptrContd.value
                        ? Colors.blueAccent
                        : Theme.of(context).iconTheme.color,
                  )
                : const Icon(Icons.bluetooth_disabled),
            onPressed: () {
              if (bluetoothService.isAdptrOn.value) {
                bluetoothService.scanPolarDevices();

                showModal();
              } else {
                Get.snackbar('Turning on Bluetooth', 'Allow Turn on Bluetooth',
                    duration: const Duration(seconds: 5),
                    colorText: isDarkMode ? Colors.white : Colors.black,
                    backgroundColor: isDarkMode
                        ? ColorConstants.darkContainer.withOpacity(0.9)
                        : ColorConstants.lightContainer.withOpacity(0.9));
                bluetoothService.turnOnBluetooth().then((value) {
                  bluetoothService.scanPolarDevices();

                });
              }
            },
          ),
        ),
        IconButton(
          icon: const Icon(CupertinoIcons.bell_fill),
          onPressed: () {},
        ),
      ],
    );
  }

  Widget _noDevice() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          "Didn't see any device🤔",
          style: Theme.of(context).textTheme.displayMedium,
        ),
        const SizedBox(
          height: 8,
        ),
        Text(
          'Make sure your device is turn on',
          style: Theme.of(context).textTheme.bodyLarge,
        ),
        const SizedBox(
          height: 32,
        ),
        TextButton(
          onPressed: () {
            bluetoothService.scanPolarDevices();
            Get.back();
            showModal();
          },
          style: ButtonStyle(
              foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
              backgroundColor: MaterialStateProperty.all<Color>(
                  ColorConstants.ceruleanBlue)),
          child: const Text('Try Again'),
        )
      ],
    );
  }

  Future<void> showModal() {
    final bluetoothService = Get.find<BluetoothService>();
    return Get.bottomSheet(
      Material(
        elevation: 8,
        borderRadius: BorderRadius.circular(32),
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.only(top: 16),
              height: 5,
              width: Get.height / 3,
              decoration: BoxDecoration(
                  color: Colors.black26,
                  borderRadius: BorderRadius.circular(124)),
            ),
            SizedBox(
              height: ThemeManager().screenHeight / 2,
              width: ThemeManager().screenWidth,
              child: FutureBuilder(
                future: bluetoothService.scanPolarDevices(),
                builder: (context, snapshot) { 
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.connectionState == ConnectionState.done) {
                    if (snapshot.data!.isEmpty) {
                      return _noDevice();
                    } else {
                      return ListView.builder(
                        itemCount: snapshot.data!.length,
                        itemBuilder: (context, index) {
                          return ListTile(
                            leading:
                                Image.asset(snapshot.data![index].imageAsset),
                            title: Text(
                              snapshot.data![index].name,
                              style: Theme.of(context).textTheme.displaySmall,
                            ),
                            subtitle: Row(
                              children: [
                                Text(
                                  'ID :${snapshot.data![index].deviceId}',
                                  style: Theme.of(context).textTheme.bodySmall,
                                ),
                                Text(
                                  ' RSSI : ${snapshot.data![index].rssi}',
                                  style: Theme.of(context).textTheme.bodySmall,
                                ),
                              ],
                            ),
                            trailing: handleConnection(snapshot.data![index]),
                          );
                        },
                      );
                    }
                  }
                  return SizedBox(
                      height: ThemeManager().screenHeight / 2,
                      width: ThemeManager().screenWidth,
                      child: _noDevice());
                },
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget handleConnection(PolarDevice device) {
    if (bluetoothService.contdDevice.value == null) {
      return TextButton(
        style: ButtonStyle(
            foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
            backgroundColor:
                MaterialStateProperty.all<Color>(ColorConstants.ceruleanBlue)),
        child: const Text('Connect'),
        onPressed: () {
          bluetoothService.connectDevice(device.deviceId);
          Get.back();
          Get.dialog(
            connecting(
              deviceName: device.name,
              deviceId: device.deviceId,
            ),
            transitionCurve: Curves.easeInOutCubic,
          );
        },
      );
    } else if (bluetoothService.contdDevice.value! == device.deviceId) {
      return TextButton(
        style: ButtonStyle(
            foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
            backgroundColor:
                MaterialStateProperty.all<Color>(ColorConstants.crimsonRed)),
        child: const Text('Disconnect'),
        onPressed: () {
          bluetoothService.disconnectDevice(device.deviceId);
          Get.back();
        },
      );
    } else {
      return TextButton(
        style: ButtonStyle(
            foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
            backgroundColor:
                MaterialStateProperty.all<Color>(ColorConstants.ceruleanBlue)),
        child: const Text('Connect'),
        onPressed: () {
          bluetoothService.connectDevice(device.deviceId);
          Get.back();
          Get.dialog(
            connecting(
              deviceName: device.name,
              deviceId: device.deviceId,
            ),
            transitionCurve: Curves.easeInOutCubic,
          );
        },
      );
    }
  }

  Dialog connecting({required String deviceName, required String deviceId}) {
    return Dialog(
        child: SizedBox(
      height: 300,
      width: 150,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Connecting to', style: Theme.of(context).textTheme.bodyLarge),
          const SizedBox(
            height: 32,
          ),
          const CupertinoActivityIndicator(
            radius: 48,
          ),
          const SizedBox(
            height: 32,
          ),
          Text(deviceName, style: Theme.of(context).textTheme.displaySmall),
          const SizedBox(
            height: 4,
          ),
          Text('Device ID : $deviceId',
              style: Theme.of(context).textTheme.bodyMedium),
        ],
      ),
    ));
  }
  // void s() {
  //   Get.bottomSheet(
  //     Material(
  //       elevation: 8,
  //       borderRadius: BorderRadius.circular(32),
  //       child: Column(
  //         children: [
  //           Container(
  //             margin: const EdgeInsets.only(top: 16),
  //             height: 5,
  //             width: Get.height / 3,
  //             decoration: BoxDecoration(
  //                 color: Colors.black26,
  //                 borderRadius: BorderRadius.circular(124)),
  //           ),
  //           GetBuilder<bluetoothService>(
  //             builder: (bluetoothService) => SizedBox(
  //               height: ThemeManager().screenHeight / 5,
  //               width: ThemeManager().screenWidth,
  //               child: FutureBuilder(
  //                 future: bluetoothService.detectedDevices.isEmpty
  //                     ? Future.delayed(const Duration(seconds: 3))
  //                     : null,
  //                 builder: (context, snapshot) {
  //                   if (snapshot.connectionState == ConnectionState.waiting) {
  //                     return const SizedBox(
  //                       width: 20,
  //                       height: 20,
  //                       child: Center(child: CircularProgressIndicator()),
  //                     );
  //                   } else if (snapshot.hasError) {
  //                     return Center(
  //                       child: Text('Error:${snapshot.error}'),
  //                     );
  //                   } else if (bluetoothService.detectedDevices.isEmpty) {
  //                     return const Center(
  //                       child: Text(
  //                           "Didn't see any device🫣,\nmake sure your device is turn on"),
  //                     );
  //                   } else {
  //                     return ListView.builder(
  //                       itemCount: bluetoothService.detectedDevices.length,
  //                       itemBuilder: (context, index) {
  //                         return ListTile(
  //                           leading: Image.asset(
  //                             bluetoothService.detectedDevices[index]['imageURL'],
  //                             height: 50,
  //                             width: 50,
  //                           ),
  //                           title: Text(
  //                             bluetoothService.detectedDevices[index]['name'],
  //                             style: Theme.of(context).textTheme.displaySmall,
  //                           ),
  //                           subtitle: Row(
  //                             children: [
  //                               Text(
  //                                 'ID :${bluetoothService.detectedDevices[index]['deviceId']}',
  //                                 style: Theme.of(context).textTheme.bodySmall,
  //                               ),
  //                               Text(
  //                                 ' RSSI : ${bluetoothService.detectedDevices[index]['rssi']}',
  //                                 style: Theme.of(context).textTheme.bodySmall,
  //                               ),
  //                             ],
  //                           ),
  //                           trailing: Obx(
  //                             () => bluetoothService.isAdptrContd.value
  //                                 ? TextButton(
  //                                     style: ButtonStyle(
  //                                         foregroundColor:
  //                                             MaterialStateProperty.all<Color>(
  //                                                 Colors.white),
  //                                         backgroundColor:
  //                                             MaterialStateProperty.all<Color>(
  //                                                 ColorConstants.crimsonRed)),
  //                                     child: const Text('Disconnect'),
  //                                     onPressed: () {
  //                                       bluetoothService.disconnectDevice(
  //                                           bluetoothService.detectedDevices[index]
  //                                               ['deviceId']);
  //                                       Get.back();
  //                                     },
  //                                   )
  //                                 : TextButton(
  //                                     style: ButtonStyle(
  //                                         foregroundColor:
  //                                             MaterialStateProperty.all<Color>(
  //                                                 Colors.white),
  //                                         backgroundColor:
  //                                             MaterialStateProperty.all<Color>(
  //                                                 ColorConstants.ceruleanBlue)),
  //                                     child: const Text('Connect'),
  //                                     onPressed: () {
  //                                       bluetoothService.connectDevice(
  //                                           bluetoothService.detectedDevices[index]
  //                                               ['deviceId']);
  //                                       Get.back();
  //                                       Get.dialog(
  //                                         Obx(
  //                                           () => Center(
  //                                               child: bluetoothService
  //                                                           .isAdptrContd
  //                                                           .value ==
  //                                                       false
  //                                                   ? Dialog(
  //                                                       child: SizedBox(
  //                                                       height: 300,
  //                                                       width: 150,
  //                                                       child: Column(
  //                                                         mainAxisAlignment:
  //                                                             MainAxisAlignment
  //                                                                 .center,
  //                                                         children: [
  //                                                           Text(
  //                                                               'Connecting to',
  //                                                               style: Theme.of(
  //                                                                       context)
  //                                                                   .textTheme
  //                                                                   .bodyLarge),
  //                                                           const SizedBox(
  //                                                             height: 32,
  //                                                           ),
  //                                                           const CupertinoActivityIndicator(
  //                                                             radius: 48,
  //                                                           ),
  //                                                           const SizedBox(
  //                                                             height: 32,
  //                                                           ),
  //                                                           Text(
  //                                                               '${bluetoothService.detectedDevices[index]['name']}',
  //                                                               style: Theme.of(
  //                                                                       context)
  //                                                                   .textTheme
  //                                                                   .displaySmall),
  //                                                           const SizedBox(
  //                                                             height: 4,
  //                                                           ),
  //                                                           Text(
  //                                                               'Device ID : ${bluetoothService.detectedDevices[index]['deviceId']}',
  //                                                               style: Theme.of(
  //                                                                       context)
  //                                                                   .textTheme
  //                                                                   .bodyMedium),
  //                                                         ],
  //                                                       ),
  //                                                     ))
  //                                                   : FutureBuilder(
  //                                                       future: Future.delayed(
  //                                                           const Duration(
  //                                                               seconds: 3),
  //                                                           () {
  //                                                         Get.back();
  //                                                       }),
  //                                                       builder: (context,
  //                                                               snapshot) =>
  //                                                           const Dialog(
  //                                                               child: Text(
  //                                                                   'Connected')),
  //                                                     )),
  //                                         ),
  //                                         transitionCurve:
  //                                             Curves.easeInOutCubic,
  //                                       );
  //                                     },
  //                                   ),
  //                           ),
  //                           onTap: () {},
  //                         );
  //                       },
  //                     );
  //                   }
  //                 },
  //               ),
  //             ),
  //           ),
  //         ],
  //       ),
  //     ),
  //   );
  // }
}
