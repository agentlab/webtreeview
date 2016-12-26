package com.mydomain.teavmfirstapp;

import java.util.ArrayList;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.teavm.parsing.Parser;

public class Hierarchy {
	public static Hierarchy targetObject = null;
	public String id;
	public Hierarchy parent;
	public JSONArray childrenArray = new JSONArray();
	public JSONObject JSONObj = new JSONObject();
	public ArrayList<Hierarchy> children = new ArrayList<Hierarchy>();
	public static JSONParser parser = new JSONParser();
	//For objects without parents
	public Hierarchy(String id){
		this.id = id;
	}
	//For objects with parents
	public Hierarchy(String id,Hierarchy parent){
		this.id = id;
		this.parent = parent;
		parent.children.add(this);
	}
	public static String saveHierarchyToJSON(Hierarchy rootObj){
		Hierarchy currentHy = null;
		Hierarchy nextHy = null;
		JSONObject rootJSONObj = new JSONObject();
		Iterator<Hierarchy> nextDepthIterator = null;
		ArrayList<Hierarchy> currentDepthArr = new ArrayList<Hierarchy>();
		ArrayList<Hierarchy> nextDepth = new ArrayList<Hierarchy>();		
		Iterator<Hierarchy> iterator = rootObj.children.iterator();
		//Packing root
		rootObj.JSONObj = new JSONObject();
		rootObj.childrenArray.clear();
		rootObj.JSONObj.put("root", rootObj.childrenArray);		
		while(iterator.hasNext()){
			currentHy = iterator.next();
			currentHy.JSONObj = new JSONObject();
			currentHy.childrenArray.clear();
			currentHy.JSONObj.put("id", currentHy.id);
			currentHy.JSONObj.put("children", (currentHy.children.size() != 0 ? currentHy.childrenArray:"0"));			
			currentHy.parent.childrenArray.add(currentHy.JSONObj);			
			nextDepthIterator = currentHy.children.iterator();
			while (nextDepthIterator.hasNext()){
				nextHy = nextDepthIterator.next();
				nextHy.childrenArray.clear();
				nextHy.JSONObj.put("id", nextHy.id);
				nextHy.JSONObj.put("children", (nextHy.children.size() != 0 ? nextHy.childrenArray:"0"));
				nextHy.parent.childrenArray.add(nextHy.JSONObj);
				currentDepthArr.add(nextHy);
			}	
		}	
		BFPacking(currentDepthArr,nextDepth);
		return rootObj.JSONObj.toJSONString();
	}
	public static void BFPacking(ArrayList<Hierarchy> currentDepthArr,
			  					ArrayList<Hierarchy> nextDepthArr){
		Hierarchy currentDepthHy;
		Hierarchy nextDepthHy = null;
		nextDepthArr = new ArrayList<Hierarchy>();
		JSONObject currentJSONObj;
		String id;
		Iterator<Hierarchy> nextDepthIterator1 = null;		
		Iterator<Hierarchy> currentDepthIterator = currentDepthArr.iterator();		
		while(currentDepthIterator.hasNext()){			
			currentDepthHy = currentDepthIterator.next();			
			if(currentDepthHy.children.size()!=0){
				nextDepthIterator1 = currentDepthHy.children.iterator();		
				while (nextDepthIterator1.hasNext()){					
					nextDepthHy = nextDepthIterator1.next();					
					nextDepthHy.JSONObj.put("id", nextDepthHy.id);					
					nextDepthHy.JSONObj.put("children", (nextDepthHy.children.size() != 0 ? nextDepthHy.childrenArray:"0"));					
					nextDepthHy.childrenArray.clear();
					nextDepthHy.parent.childrenArray.add(nextDepthHy.JSONObj);								
					nextDepthArr.add(nextDepthHy);					
				}
			}
			else{
			 currentDepthHy.JSONObj.put("children", "0");	
			 continue;
			}
		}
		if (nextDepthArr.size()==0) return;	
		BFParsing(nextDepthArr,currentDepthArr);		
	}
	public static void BFParsing(ArrayList<Hierarchy> currentDepthArr,
							  ArrayList<Hierarchy> nextDepthArr){
		Hierarchy currentDepthHy;
		Hierarchy nextDepthHy = null;
		nextDepthArr = new ArrayList<Hierarchy>();
		JSONObject currentJSONObj;
		String id;
		Iterator<JSONObject> nextDepthIterator = null;		
		Iterator<Hierarchy> currentDepthIterator = currentDepthArr.iterator();		
		boolean flag = false;
		while(currentDepthIterator.hasNext()){			
			currentDepthHy = currentDepthIterator.next();		
			if(currentDepthHy.childrenArray!=null)
			 nextDepthIterator = currentDepthHy.childrenArray.iterator();
			else 
			 continue;
			while (nextDepthIterator.hasNext()){				
				currentJSONObj = nextDepthIterator.next();
				id = (String) currentJSONObj.get("id");				
				nextDepthHy = new Hierarchy(id,currentDepthHy);
				if (currentJSONObj.get("children").toString().equals("0")!=true)
				nextDepthHy.childrenArray = (JSONArray) currentJSONObj.get("children");				
				nextDepthArr.add(nextDepthHy);				
			}		
		}	
		if (nextDepthArr.size()==0) return;		
		BFParsing(nextDepthArr,currentDepthArr);
	}	
	public static Hierarchy loadJSONFile(String nameOfFile) throws FileNotFoundException {		
		Hierarchy rootObject = new Hierarchy("root");//ROOT OF ALL HIERARCHY
		ArrayList<Hierarchy> currentDepth = new ArrayList<Hierarchy>();
		ArrayList<Hierarchy> nextDepth = new ArrayList<Hierarchy>();
		Hierarchy currentHy;
		JSONObject currentJSONObj;
		String id;				
		try {			
			Object obj = parser.parse(new FileReader(nameOfFile));			
			JSONObject jsonObject = (JSONObject) obj;						
			rootObject.childrenArray = (JSONArray) jsonObject.get("root");			
			Iterator<JSONObject> iterator = rootObject.childrenArray.iterator();			
			while (iterator.hasNext()){				
				currentJSONObj = iterator.next();
				id = (String) currentJSONObj.get("id");				
				currentHy = new Hierarchy(id,rootObject);				
				if (currentJSONObj.get("children").toString().equals("0")!=true)
					currentHy.childrenArray = (JSONArray) currentJSONObj.get("children");			
				currentDepth.add(currentHy);
			}			
			BFParsing(currentDepth,nextDepth);								
		} 
		catch (IOException ex) {
			System.out.println(ex);
		}
		catch (ParseException ex) {
			System.out.println(ex);
			int d = 3;
		}
		return rootObject;
	}
	public static Hierarchy loadJSONText(String text) {		
		Hierarchy rootObject = new Hierarchy("root");//ROOT OF ALL HIERARCHY
		ArrayList<Hierarchy> currentDepth = new ArrayList<Hierarchy>();
		ArrayList<Hierarchy> nextDepth = new ArrayList<Hierarchy>();
		Hierarchy currentHy;
		JSONObject currentJSONObj;
		String id;		
		try {						
			Object obj = parser.parse(text);			
			JSONObject jsonObject = (JSONObject) obj;						
			rootObject.childrenArray = (JSONArray) jsonObject.get("root");			
			Iterator<JSONObject> iterator = rootObject.childrenArray.iterator();		
			while (iterator.hasNext()){				
				currentJSONObj = iterator.next();
				id = (String) currentJSONObj.get("id");				
				currentHy = new Hierarchy(id,rootObject);				
				if (currentJSONObj.get("children").toString().equals("0")!=true)
					currentHy.childrenArray = (JSONArray) currentJSONObj.get("children");				
				currentDepth.add(currentHy);
			}			
			BFParsing(currentDepth,nextDepth);								
		}
		catch (ParseException ex) {
			System.out.println(ex);
			int d = 3;
		}
		return rootObject;
	}
	public static void findElement(String id2,
									Hierarchy rootObj,
									ArrayList<Hierarchy> currentDepthArr,
									ArrayList<Hierarchy> nextDepthArr){
		Hierarchy nextDepthHy = null;
		nextDepthArr = new ArrayList<Hierarchy>();
		Hierarchy currentDepthObj = null;
		Iterator<Hierarchy> nextDepthIterator = null;
		boolean flag1 = false;	
		Iterator<Hierarchy> iterator = currentDepthArr.iterator();		
		while (iterator.hasNext()){
			currentDepthObj = iterator.next();			
			System.out.println("ID " + id2);		
			flag1 = currentDepthObj.id.equals(id2);
			System.out.println("ID " + id2);
			System.out.println("Current " +currentDepthObj.id);
			System.out.println("flag " +flag1);
			if (flag1) {
				targetObject = currentDepthObj;
				break;
			}
			else{
			nextDepthIterator = currentDepthObj.children.iterator();
				while (nextDepthIterator.hasNext()){
					nextDepthHy = nextDepthIterator.next();				
					nextDepthArr.add(nextDepthHy);
				}
			}
		}
		if (nextDepthArr.size()==0) return;
		if (flag1==false)
			currentDepthObj = null;
			findElement(id2,rootObj,nextDepthArr,currentDepthArr);		
	
	}	
}