package com.appg800;

import com.facebook.react.ReactActivity;

import br.com.gertec.gedi.GEDI;
import br.com.gertec.gedi.enums.GEDI_PRNTR_e_Alignment;
import br.com.gertec.gedi.enums.GEDI_PRNTR_e_BarCodeType;
import br.com.gertec.gedi.enums.GEDI_PRNTR_e_Status;
import br.com.gertec.gedi.exceptions.GediException;
import br.com.gertec.gedi.impl.Gedi;

import br.com.gertec.gedi.interfaces.IGEDI;
import br.com.gertec.gedi.interfaces.IPRNTR;
import br.com.gertec.gedi.structs.GEDI_PRNTR_st_BarCodeConfig;
import br.com.gertec.gedi.structs.GEDI_PRNTR_st_PictureConfig;
import br.com.gertec.gedi.structs.GEDI_PRNTR_st_StringConfig;

import android.graphics.Paint;
import android.graphics.Typeface;
import android.content.Intent;

public class MainActivity extends ReactActivity {

  
    private static IGEDI iGedi = null;
    private static IPRNTR iPrint = null;

    private static  GEDI_PRNTR_e_Status status;
    private static  GEDI_PRNTR_st_StringConfig stringConfig;

    private static boolean isInitPrint = false;

    public MainActivity(){
      new Thread(() -> {
          iGedi = new Gedi(this);
          iGedi = GEDI.getInstance(this);
          iPrint = iGedi.getPRNTR();
          try {
              new Thread().sleep(250);
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
      }).start();
    }

    @Override
    protected String getMainComponentName() {
      return "AppG800";
    }

    public static boolean isImpressoraOK(){
          if( status.getValue() == 0 ){
              return true;
          }
          return false;
      }

      public static void getStatusImpressora() throws GediException {
          try {
              ImpressoraInit();
              status = iPrint.Status();
          } catch ( GediException e) {
              throw new GediException(e.getErrorCode());
          }
      }

      public static void ImpressoraInit() throws GediException{
          try{
              if(iPrint != null && !isInitPrint){
                  isInitPrint = true;
                  iPrint.Init();
              }
          }catch (GediException e){
              e.printStackTrace();
              throw new GediException(e.getErrorCode());
          }
      }

      public static void ImpressoraOutput() throws GediException {
          try {
              if( iPrint != null  ){
                  iPrint.Output();
                  isInitPrint = false;
              }
          } catch (GediException e) {
              e.printStackTrace();
              throw new GediException(e.getErrorCode());
          }
      }

      //@SuppressLint("WrongConstant")
      // @ReactMethod
      public static void printText(String text, int align, int style) throws Exception{
          try{
              getStatusImpressora();

              if(isImpressoraOK()){
                  stringConfig = new GEDI_PRNTR_st_StringConfig(new Paint());

                  // int size = Integer.valueOf(spinnerFontSize.getSelectedItem().toString());
                  stringConfig.paint.setTextSize(50);

                  if(align == 2) stringConfig.paint.setTextAlign(Paint.Align.CENTER);
                  if(align == 1) stringConfig.paint.setTextAlign(Paint.Align.LEFT);
                  if(align == 3) stringConfig.paint.setTextAlign(Paint.Align.RIGHT);

                  // String type = spinnerFontType.getSelectedItem().toString();
                  // if(type.equals("DEFAULT")) this.stringConfig.paint.setTypeface(Typeface.DEFAULT);
                  // if(type.equals("MONOSPACE")) this.stringConfig.paint.setTypeface(Typeface.MONOSPACE);
                  // if(type.equals("SANS_SERIF")) this.stringConfig.paint.setTypeface(Typeface.SANS_SERIF);
                  // if(type.equals("SERIF")) this.stringConfig.paint.setTypeface(Typeface.SERIF);

                  if(style == 1) stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
                  if(style == 2) stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.ITALIC));
                  if(style == 3) stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD_ITALIC));

                  // if(checkNegrito.isChecked()){
                  //     this.stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD));
                  //     Toast.makeText(getApplicationContext(), "BOLD", Toast.LENGTH_SHORT).show();
                  // }
                  // if(checkItalic.isChecked()){
                  //     this.stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.ITALIC));
                  //     Toast.makeText(getApplicationContext(), "ITALIC", Toast.LENGTH_SHORT).show();
                  // }
                  // if(checkItalic.isChecked() && checkNegrito.isChecked()){
                  //     this.stringConfig.paint.setTypeface(Typeface.defaultFromStyle(Typeface.BOLD_ITALIC));
                  //     Toast.makeText(getApplicationContext(), "BOLD_ITALIC", Toast.LENGTH_SHORT).show();
                  // }

                  //stringConfig.paint.setTextAlign(Paint.Align.CENTER);

                  iPrint.DrawStringExt(stringConfig, text);
                  iPrint.DrawBlankLine(100);
                  ImpressoraOutput();
                  //return true;
              }
          }catch (GediException e){
              throw new GediException(e.getErrorCode());
          }
          //return false;
      }

    public static void imprimeBarCode( String texto, int height, int width,  String barCodeType ) throws GediException {
        try {

            GEDI_PRNTR_st_BarCodeConfig barCodeConfig = new GEDI_PRNTR_st_BarCodeConfig();
            //Bar Code Type
            barCodeConfig.barCodeType = GEDI_PRNTR_e_BarCodeType.valueOf(barCodeType);

            //Height
            barCodeConfig.height = height;
            //Width
            barCodeConfig.width = width;

            ImpressoraInit();
            
            iPrint.DrawBarCode(barCodeConfig,texto);
            iPrint.DrawBlankLine(100);

            ImpressoraOutput();
            // return true;
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException(e);
        } catch (GediException e) {
            throw new GediException(e.getErrorCode());
        }
    }
}
