// ToastModule.java

package com.appg800;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

import com.appg800.MainActivity;

public class ToastModule extends ReactContextBaseJavaModule {

  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "ToastExample";
  }

    

  @ReactMethod
  public void show(String message, Callback errorCallback, Callback successCallback) {
    System.out.println("**********!!!!!!!!:"  + message);
    successCallback.invoke("****** IN THE CALLBACK*******");
    //Toast.makeText(getReactApplicationContext(), message, duration).show();
  }

  @ReactMethod
  public void printTextInTost(String message, int align, int style){
      try{
          MainActivity.printText(message, align, style);
      }catch(Exception e){
          e.printStackTrace();
      }
  }

    @ReactMethod
    public void printBarCodeInToast(String text, int height, int width, String typeBarCode){
        try{
            MainActivity.imprimeBarCode(text, height, width, typeBarCode);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

}