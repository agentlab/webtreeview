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


import java.util.ArrayList;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.teavm.jso.ajax.XMLHttpRequest;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;

import com.mydomain.teavmfirstapp.*;

public final class Client {
	private static Hierarchy rootHierarchyObject;
	private static Hierarchy rootHierarchyObject2;
    private static HTMLDocument document = Window.current().getDocument();
    private static HTMLButtonElement helloButton = document.getElementById("Load-button").cast();
    private static HTMLButtonElement CrButton = document.getElementById("add-button").cast();
    private static HTMLButtonElement DelButton = document.getElementById("delete-button").cast();
    private static HTMLButtonElement EdButton = document.getElementById("change-button").cast();
    private static HTMLButtonElement SaveInDBButton = document.getElementById("Save-button").cast();
    private static HTMLElement responsePanel = document.getElementById("response-panel");
    private static HTMLElement thinkingPanel = document.getElementById("thinking-panel");
    private static HTMLInputElement CrParentInp = document.getElementById("addP-input").cast();
    private static HTMLInputElement CrChildInp = document.getElementById("addC-input").cast();
    private static HTMLInputElement DelElemInp = document.getElementById("delete-input").cast();
    private static HTMLInputElement EditElemInp = document.getElementById("change-input").cast();
    private static HTMLInputElement valueInp = document.getElementById("value-input").cast();


    public static void main(String[] args) {
        helloButton.listenClick(evt -> loadData());
        EdButton.listenClick(evt -> editEl());
        DelButton.listenClick(evt -> delEl());
        CrButton.listenClick(evt -> createEl());
        SaveInDBButton.listenClick(evt -> saveToDB());
        int i = 1;
    }

    
    private static void saveToDB(){
    	rootHierarchyObject2 = Hierarchy.saveHierarchyToJSON(rootHierarchyObject);
    	System.out.println(rootHierarchyObject2.JSONObj.toJSONString());
    }
    
    private static void createEl(){
    	HTMLElement NewLiElem = null;
    	HTMLElement ParentLiElem = null;
    	ArrayList<Hierarchy> currentDepthArr = new ArrayList<Hierarchy>();
    	ArrayList<Hierarchy> nextDepthArr = new ArrayList<Hierarchy>();
    	
    	String IDParent = CrParentInp.getValue();
    	String IDOfNewEl = CrChildInp.getValue();
    	
    	currentDepthArr = rootHierarchyObject.children;
    	
    	Hierarchy.findElement(IDParent, rootHierarchyObject, currentDepthArr, nextDepthArr);
    	Hierarchy ParentObject = Hierarchy.targetObject; 
    	Hierarchy newObject = new Hierarchy(IDOfNewEl,ParentObject);
    	
    	NewLiElem = document.createElement("li");
    	NewLiElem.setAttribute("id", newObject.id);
    	NewLiElem.appendChild(document.createTextNode(newObject.id));
    	
    	System.out.println("PArent " + ParentObject.id);
    	
    	ParentLiElem = document.getElementById(ParentObject.id);
    	
    	if (document.getElementById("ul-"+ParentObject.id)==null){
			HTMLElement newUlElem = document.createElement("ul");
			newUlElem.setAttribute("id", "ul-"+ParentObject.id);
			ParentLiElem.appendChild(newUlElem);
		}else{
			document.getElementById("ul-"+ParentObject.id).appendChild(NewLiElem);
		}
    }
    
    private static void delEl(){
    	Hierarchy hyObject = null;
    	HTMLElement targetElem = null;
    	ArrayList<Hierarchy> currentDepthArr = new ArrayList<Hierarchy>();
    	ArrayList<Hierarchy> nextDepthArr = new ArrayList<Hierarchy>();
    	
    	String IDElForDel =  DelElemInp.getValue();
    	
    	currentDepthArr = rootHierarchyObject.children;
    	
    	Hierarchy.findElement(IDElForDel, rootHierarchyObject, currentDepthArr, nextDepthArr);
    	
    	hyObject = Hierarchy.targetObject;
    	System.out.println("asdas = " + hyObject.id);
    	
    	targetElem = document.getElementById(hyObject.id);
    	targetElem.delete();
    	
    	hyObject.parent.children.remove(hyObject);
    	    	
    	
    	
    	
    	 	
   
    }
    
    
    private static void editEl(){
    	Hierarchy hyObject = null;	
    	HTMLElement targetElem;
    	ArrayList<Hierarchy> currentDepthArr = new ArrayList<Hierarchy>();
    	ArrayList<Hierarchy> nextDepthArr = new ArrayList<Hierarchy>();
    	
    	String Currentvalue = valueInp.getValue();
    	String NewValue = EditElemInp.getValue();
    	
    	System.out.println("Current = " + rootHierarchyObject.id);
    	
    	currentDepthArr = rootHierarchyObject.children;
    	
    	System.out.println("dsad = " + rootHierarchyObject.children.get(0).id);
    	
    	Hierarchy.findElement(Currentvalue.toString(), rootHierarchyObject, currentDepthArr, nextDepthArr);
    	
    	hyObject = Hierarchy.targetObject;
    	
    	System.out.println("asdas = " + hyObject.id);
    	
    	hyObject.id =  NewValue;
    	
    	
    	
    	targetElem = document.getElementById(Currentvalue);
    	targetElem.removeAttribute("id");
    	targetElem.setAttribute("id", hyObject.id);
    	targetElem.replaceChild(document.createTextNode(hyObject.id),targetElem.getChildNodes().item(0));
    	
    }
    
    private static void loadData() {
        helloButton.setDisabled(true);
        thinkingPanel.getStyle().setProperty("display", "");
        XMLHttpRequest xhr = XMLHttpRequest.create();
        xhr.onComplete(() -> receiveData(xhr.getResponseText()));
        xhr.open("GET", "hello");
        xhr.setRequestHeader("action", "loadData");
        xhr.send();
    }

    private static void receiveData(String text) {
    	ArrayList<Hierarchy> currentDepthArr = new ArrayList<Hierarchy>();
    	ArrayList<Hierarchy> nextDepth = new ArrayList<Hierarchy>();
    	
    	rootHierarchyObject = Hierarchy.loadJSONText(text);
    	
    	HTMLElement responseElem = document.createElement("ul");
    	responseElem.setAttribute("id","ul-"+rootHierarchyObject.id);

    	responsePanel.appendChild(responseElem);
    	
    	currentDepthArr = rootHierarchyObject.children;
    	
    	System.out.println("0 = " + rootHierarchyObject.children.get(0).id);
    	
    	rootHierarchyObject2 = rootHierarchyObject;
    	
    	System.out.println("1 = " + rootHierarchyObject2.children.get(0).id);
    	
    	addElemtsToHTML(currentDepthArr,nextDepth);
    	
    	System.out.println("2  = " + rootHierarchyObject2.children.get(0).id);
        
        helloButton.setDisabled(false);
        thinkingPanel.getStyle().setProperty("display", "none");
    }
    
    
    private static void addElemtsToHTML(ArrayList<Hierarchy> currentDepthArr,
			  							ArrayList<Hierarchy> nextDepthArr){
		Hierarchy currentDepthHy;
		Hierarchy nextDepthHy = null;
		nextDepthArr = new ArrayList<Hierarchy>();
		Iterator<Hierarchy> nextDepthIterator = null;
		
		System.out.println("Inside current before  = " + currentDepthArr.get(0).id);
		
		Iterator<Hierarchy> currentDepthIterator = currentDepthArr.iterator();
		
		System.out.println("Inside current after  = " + currentDepthIterator.toString());
		
		while(currentDepthIterator.hasNext()){
			HTMLElement newLiElem = null;
			
			
			currentDepthHy = currentDepthIterator.next();
			
			System.out.println("Inside while  = " + currentDepthHy.id);
			
			if (document.getElementById(currentDepthHy.id)==null){
				newLiElem = document.createElement("li");
				newLiElem.setAttribute("id", currentDepthHy.id);
				newLiElem.appendChild(document.createTextNode(currentDepthHy.id));
				document.getElementById("ul-"+currentDepthHy.parent.id).appendChild(newLiElem);
				
			}
			
			
			if(currentDepthHy.children!=null){
				if (document.getElementById("ul-"+currentDepthHy.id)==null){
					HTMLElement newUlElem = document.createElement("ul");
					newUlElem.setAttribute("id", "ul-"+currentDepthHy.id);
					newLiElem.appendChild(newUlElem);
					nextDepthIterator = currentDepthHy.children.iterator();
				}
					
			} else continue;
			while (nextDepthIterator.hasNext()){
				
				nextDepthHy = nextDepthIterator.next();
								
				nextDepthArr.add(nextDepthHy);
				
			}
			
		}
		
		if (nextDepthArr.size()==0) return;
		
		addElemtsToHTML(nextDepthArr,currentDepthArr);
    }
}