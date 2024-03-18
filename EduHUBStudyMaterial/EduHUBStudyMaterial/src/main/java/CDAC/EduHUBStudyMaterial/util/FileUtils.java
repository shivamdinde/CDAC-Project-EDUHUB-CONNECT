package CDAC.EduHUBStudyMaterial.util;

import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

public class FileUtils {


    public static byte[] compressFile(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setLevel(Deflater.BEST_COMPRESSION);
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] tmp = new byte[4*1024];
        while (!deflater.finished()) {
            int size = deflater.deflate(tmp);
            outputStream.write(tmp, 0, size);
        }
        try {
            outputStream.close();
        } catch (Exception ignored) {
        }
        return outputStream.toByteArray();
    }



    public static byte[] decompressFile(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] tmp = new byte[4*1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(tmp);
                outputStream.write(tmp, 0, count);
            }
            outputStream.close();
        } catch (Exception ignored) {
        }
        return outputStream.toByteArray();
    }
    
    public static String determineContentType(String fileName) {
        String fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        Map<String, String> contentTypes = new HashMap<>();
        contentTypes.put("pdf", "application/pdf");
        contentTypes.put("png", "image/png");
        contentTypes.put("jpg", "image/jpeg");
        contentTypes.put("webp", "image/webp");
        // Add more mappings for other file types if needed
        
        return contentTypes.getOrDefault(fileExtension, "application/octet-stream"); // Default to octet-stream if type is unknown
    }

}

