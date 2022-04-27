"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4334],{20941:function(e){e.exports=JSON.parse('{"functions":[{"name":"SetClass","desc":"Adds the class into the Classes cache so it can be retrieved via [ClassSerivce:GetClass].","params":[{"name":"ClassName","desc":"The name of the class being added.","lua_type":"string"},{"name":"ClassData","desc":"The data of the class being added.","lua_type":"any"}],"returns":[{"desc":"The class itself.","lua_type":"any"}],"function_type":"method","since":"1.0.0","source":{"line":27,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}},{"name":"SetClassParent","desc":"Sets the ClassModule\'s parent to be the ParentClass\'s modulescript.","params":[{"name":"ClassModule","desc":"The ModuleScript to be moved.","lua_type":"ModuleScript"},{"name":"ParentClass","desc":"The class which the ClassModule should be parented under. If \\"AddOn\\" is put in, it will instead be put into the AddOns folder.","lua_type":"string"}],"returns":[],"function_type":"method","errors":[{"lua_type":"\\"Attempted to add ClassModule to a class ([ParentClass]) that hasn\'t been made yet!\\"","desc":"Occurs when the ParentClass doesn\'t exist in the service."},{"lua_type":"\\"[ParentClass].CoreModule is nil!\\"","desc":"Occurs when the ParentClass doesn\'t have a CoreModule property."}],"since":"1.1.0","source":{"line":44,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}},{"name":"AddClassModule","desc":"A wrapper for [ClassService:AddClass] where you pass in a ModuleScript with the class data instead.","params":[{"name":"ClassModule","desc":"The ModuleScript with the name of the class and contains the ClassData when required.","lua_type":"ModuleScript"},{"name":"ParentClass","desc":"The class which the ClassModule should be parented under. If \\"AddOn\\" is put in, it will instead be put into the AddOns folder.","lua_type":"string?"}],"returns":[{"desc":"The class itself.","lua_type":"table"}],"function_type":"method","since":"1.1.0","source":{"line":69,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}},{"name":"GetClass","desc":"Returns the requested class, if it exists.","params":[{"name":"ClassName","desc":"The name of the requested class.","lua_type":"string"}],"returns":[{"desc":"The class itself, if it exists.","lua_type":"any"}],"function_type":"method","since":"1.0.0","source":{"line":85,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}},{"name":"UnpackClasses","desc":"Sets up the initial classes upon being required.","params":[{"name":"Parent","desc":"","lua_type":"ModuleScript"}],"returns":[],"function_type":"static","since":"1.0.0","private":true,"source":{"line":101,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}}],"properties":[],"types":[],"name":"ClassService","desc":"A singleton that allows quick indexing of initialized classes in the environment.","source":{"line":7,"path":"src/ServerStorage/ArcaneumEngine/Global/ClassService/init.lua"}}')}}]);