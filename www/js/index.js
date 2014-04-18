/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	// find all contacts with 'Mathias' in any name field
	alert('--------onDeviceReady ');
	var options = new ContactFindOptions();
	options.filter = "Mathias";
	options.multiple = true; 
	var fields = ["displayName", "name", "phoneNumbers"];
	navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) {
	alert('--------onSuccess ' + contacts.length);

	for(var i = 0; i < contacts.length; i++) {
		var contact = contacts[i];
		//alert('--------onSuccess for =' + i + " contact " + contact.id +" displayname " + contact.displayName +" name "+ contact.name);
		var html = '<div data-role="collapsible" data-inset="false">';
		
		if(contact.displayName != null){
			html += '<h2>' + contacts[i].displayName + '</h2>';
			html += '<ul data-role="listview">'
			if(contact.phoneNumbers != null){
				for(var j = 0; j < contact.phoneNumbers.length; j++) {
					html += '<li>' + contact.phoneNumbers[j].type + 
					": " + contact.phoneNumbers[j].value + '</li>';
				}
			}
			
			html += '</ul></div>';
		}
		
		$('#contactsList').append(html);
	}

	$('[data-role=collapsible]').collapsible().trigger('create');
}

function onError(contactError) {
	alert('onError!');
}


