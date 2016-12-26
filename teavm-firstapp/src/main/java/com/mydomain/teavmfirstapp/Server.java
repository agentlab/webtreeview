/*
 *  Copyright 2014 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.mydomain.teavmfirstapp;

import java.io.File;
import java.io.InputStreamReader;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@WebServlet("/hello")
public class Server extends HttpServlet {  
	private static final long serialVersionUID = -5014505771271825585L; 
    private static JSONParser parser = new JSONParser();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, FileNotFoundException, IOException{
        try {
            Thread.sleep(500);
        } 
        catch (InterruptedException e) {
            return;
        }
    String action = req.getHeader("action");
    	if (action.equals("loadData")==true) {
    		try {       		
    			JSONObject json = (JSONObject) parser.parse(new InputStreamReader(getClass().getClassLoader().getResourceAsStream("/com/DBjson.json")));
    			json.writeJSONString(resp.getWriter());
    		}
    		catch (ParseException e) {
				e.printStackTrace();
    		}      
    	} 
    	else if(action.equals("saveData")==true){
    		String JSON = req.getHeader("JSON");
    		try {
    			File myFile = new File(getClass().getClassLoader().getResource("/com/DBjson.json").getPath());
    			FileOutputStream fileStream = new FileOutputStream(myFile, false);
    			byte[] myBytes = JSON.getBytes();
    			fileStream.write(myBytes);
    			fileStream.close();
    			System.out.println("Успешно сохранено. Данные, которые сохранены - "); 
    				try { 
    					JSONObject json = (JSONObject) parser.parse(new InputStreamReader(getClass().getClassLoader().getResourceAsStream("/com/DBjson.json"))); 
    					System.out.println(json.toJSONString()); 
    				} 
    				catch (ParseException e) { 
		        		e.printStackTrace(); 
    				}
    				resp.getHeader("NAME");
    		} 
    		catch (Exception e) {
				e.printStackTrace();
    		}
    	}
    }
}