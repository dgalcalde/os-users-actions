/*  
 *   Copyright 2014 IT4biz IT Solutions Ltda
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 * 	 changed by it4biz.com.br
 */

/**
 * Renders a chart for each workspace
 */

var OSUserActions = Backbone.View.extend({
	
    initialize: function(args) {
        this.workspace = args.workspace;
        
        // Bind table rendering to query result event
        _.bindAll(this, "render", "receive_data");

        this.workspace.bind('query:result', this.receive_data);
        
    },
    
    receive_data: function(args) {
        console.log("OS User Actions");
	var mdxLOG = "El usuario: " + window.top.SESSION_NAME + " ejecuta: "+ args.workspace.query.result.result.query.mdx;
	$.post("/os-user-actions/index.jsp", {osmdxaction: mdxLOG},function(result){console.log("enviado");});
	console.log(mdxLOG);
	$(".export_xls, .export_csv, .export_pdf, .drillthrough_export").click(function()
	{
        	$.post("/os-user-actions/index.jsp", {osmdxaction: "El usuario: " + window.top.SESSION_NAME + " ha descargado: "+ args.workspace.query.result.result.query.mdx},function(result){console.log("enviado");});
	});
}
});
	//console.log(window.top.SESSION_NAME);
        //console.log(args.workspace.query.result.result.query.mdx);
        //return _.delay(this.process_data, 0, args);
/**
 * Start Plugin
 */ 
 Saiku.events.bind('session:new', function(session) {
		
        function new_workspace(args) {
        	// Add stats element
            if (typeof args.workspace.osUserAction == "undefined") {             	   	
            	args.workspace.osUserAction = new OSUserActions({ workspace: args.workspace });
            }
        }

        // Attach stats to future tabs
        Saiku.session.bind("workspace:new", new_workspace);
    });
