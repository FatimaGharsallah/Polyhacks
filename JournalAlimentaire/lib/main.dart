import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '/Pages/jour.dart';
import '/Pages/calendar.dart';


void main() => runApp(GetMaterialApp(
  initialRoute: '/Jour',

  routes:{
    '/Jour': (context) => const Jour(),
    '/Calendar': (context) => const Calendar(),
  },
),
);
