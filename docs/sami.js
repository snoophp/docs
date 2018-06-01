
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:SnooPHP" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP.html">SnooPHP</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SnooPHP_Curl" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Curl.html">Curl</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Curl_Curl" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Curl/Curl.html">Curl</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Curl_Delete" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Curl/Delete.html">Delete</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Curl_Get" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Curl/Get.html">Get</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Curl_Post" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Curl/Post.html">Post</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Curl_Put" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Curl/Put.html">Put</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Git" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Git.html">Git</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Git_GitHubWebhook" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Git/GitHubWebhook.html">GitHubWebhook</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Git_Webhook" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Git/Webhook.html">Webhook</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Http" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Http_Redirect" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Http/Redirect.html">Redirect</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Http_Request" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Http/Request.html">Request</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Http_Response" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Http/Response.html">Response</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Http_Route" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Http/Route.html">Route</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Http_Router" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Http/Router.html">Router</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Imgur" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Imgur.html">Imgur</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Imgur_Api" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Imgur/Api.html">Api</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Imgur_Image" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Imgur/Image.html">Image</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Imgur_Resource" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Imgur/Resource.html">Resource</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Model" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Model.html">Model</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Model_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Collection.html">Collection</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Model_Column" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Column.html">Column</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Model_Db" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Db.html">Db</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Model_Model" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Model.html">Model</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Model_Node" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Node.html">Node</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Model_Table" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Model/Table.html">Table</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Utils" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Utils.html">Utils</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Utils_Utils" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Utils/Utils.html">Utils</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:SnooPHP_Vue" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SnooPHP/Vue.html">Vue</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SnooPHP_Vue_Component" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Vue/Component.html">Component</a>                    </div>                </li>                            <li data-name="class:SnooPHP_Vue_Vue" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SnooPHP/Vue/Vue.html">Vue</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "SnooPHP.html", "name": "SnooPHP", "doc": "Namespace SnooPHP"},{"type": "Namespace", "link": "SnooPHP/Curl.html", "name": "SnooPHP\\Curl", "doc": "Namespace SnooPHP\\Curl"},{"type": "Namespace", "link": "SnooPHP/Git.html", "name": "SnooPHP\\Git", "doc": "Namespace SnooPHP\\Git"},{"type": "Namespace", "link": "SnooPHP/Http.html", "name": "SnooPHP\\Http", "doc": "Namespace SnooPHP\\Http"},{"type": "Namespace", "link": "SnooPHP/Imgur.html", "name": "SnooPHP\\Imgur", "doc": "Namespace SnooPHP\\Imgur"},{"type": "Namespace", "link": "SnooPHP/Model.html", "name": "SnooPHP\\Model", "doc": "Namespace SnooPHP\\Model"},{"type": "Namespace", "link": "SnooPHP/Utils.html", "name": "SnooPHP\\Utils", "doc": "Namespace SnooPHP\\Utils"},{"type": "Namespace", "link": "SnooPHP/Vue.html", "name": "SnooPHP\\Vue", "doc": "Namespace SnooPHP\\Vue"},
            
            {"type": "Class", "fromName": "SnooPHP\\Curl", "fromLink": "SnooPHP/Curl.html", "link": "SnooPHP/Curl/Curl.html", "name": "SnooPHP\\Curl\\Curl", "doc": "&quot;Provides a friendly interface to perform HTTP requests using native php curl library&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method___construct", "name": "SnooPHP\\Curl\\Curl::__construct", "doc": "&quot;Create a new Curl session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_exec", "name": "SnooPHP\\Curl\\Curl::exec", "doc": "&quot;Execute and close session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_content", "name": "SnooPHP\\Curl\\Curl::content", "doc": "&quot;Get curl response body&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_contentType", "name": "SnooPHP\\Curl\\Curl::contentType", "doc": "&quot;Get curl reponse content type&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_code", "name": "SnooPHP\\Curl\\Curl::code", "doc": "&quot;Get curl response code&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_success", "name": "SnooPHP\\Curl\\Curl::success", "doc": "&quot;Return true if response is success&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_info", "name": "SnooPHP\\Curl\\Curl::info", "doc": "&quot;Get session info&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_url", "name": "SnooPHP\\Curl\\Curl::url", "doc": "&quot;Set or get session url&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_option", "name": "SnooPHP\\Curl\\Curl::option", "doc": "&quot;Set option&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_error", "name": "SnooPHP\\Curl\\Curl::error", "doc": "&quot;Return last error as string&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_errorCode", "name": "SnooPHP\\Curl\\Curl::errorCode", "doc": "&quot;Return last error code&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_parseHeader", "name": "SnooPHP\\Curl\\Curl::parseHeader", "doc": "&quot;Parse header line&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Curl", "fromLink": "SnooPHP/Curl/Curl.html", "link": "SnooPHP/Curl/Curl.html#method_create", "name": "SnooPHP\\Curl\\Curl::create", "doc": "&quot;Create appropriate session&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Curl", "fromLink": "SnooPHP/Curl.html", "link": "SnooPHP/Curl/Delete.html", "name": "SnooPHP\\Curl\\Delete", "doc": "&quot;DELETE request wrapper&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Curl\\Delete", "fromLink": "SnooPHP/Curl/Delete.html", "link": "SnooPHP/Curl/Delete.html#method___construct", "name": "SnooPHP\\Curl\\Delete::__construct", "doc": "&quot;Create a new Curl session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Delete", "fromLink": "SnooPHP/Curl/Delete.html", "link": "SnooPHP/Curl/Delete.html#method_withAuth", "name": "SnooPHP\\Curl\\Delete::withAuth", "doc": "&quot;Create a new session with an authorization header&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Curl", "fromLink": "SnooPHP/Curl.html", "link": "SnooPHP/Curl/Get.html", "name": "SnooPHP\\Curl\\Get", "doc": "&quot;GET request wrapper&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Curl\\Get", "fromLink": "SnooPHP/Curl/Get.html", "link": "SnooPHP/Curl/Get.html#method___construct", "name": "SnooPHP\\Curl\\Get::__construct", "doc": "&quot;Create a new Curl session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Get", "fromLink": "SnooPHP/Curl/Get.html", "link": "SnooPHP/Curl/Get.html#method_withAuth", "name": "SnooPHP\\Curl\\Get::withAuth", "doc": "&quot;Create a new session with an authorization header&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Curl", "fromLink": "SnooPHP/Curl.html", "link": "SnooPHP/Curl/Post.html", "name": "SnooPHP\\Curl\\Post", "doc": "&quot;POST request wrapper&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Curl\\Post", "fromLink": "SnooPHP/Curl/Post.html", "link": "SnooPHP/Curl/Post.html#method___construct", "name": "SnooPHP\\Curl\\Post::__construct", "doc": "&quot;Create a new Curl session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Post", "fromLink": "SnooPHP/Curl/Post.html", "link": "SnooPHP/Curl/Post.html#method_withAuth", "name": "SnooPHP\\Curl\\Post::withAuth", "doc": "&quot;Create a new session with an authorization header&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Curl", "fromLink": "SnooPHP/Curl.html", "link": "SnooPHP/Curl/Put.html", "name": "SnooPHP\\Curl\\Put", "doc": "&quot;PUT request wrapper&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Curl\\Put", "fromLink": "SnooPHP/Curl/Put.html", "link": "SnooPHP/Curl/Put.html#method___construct", "name": "SnooPHP\\Curl\\Put::__construct", "doc": "&quot;Create a new Curl session&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Curl\\Put", "fromLink": "SnooPHP/Curl/Put.html", "link": "SnooPHP/Curl/Put.html#method_withAuth", "name": "SnooPHP\\Curl\\Put::withAuth", "doc": "&quot;Create a new session with an authorization header&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Git", "fromLink": "SnooPHP/Git.html", "link": "SnooPHP/Git/GitHubWebhook.html", "name": "SnooPHP\\Git\\GitHubWebhook", "doc": "&quot;A webhook designed to work with github webhook system&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Git\\GitHubWebhook", "fromLink": "SnooPHP/Git/GitHubWebhook.html", "link": "SnooPHP/Git/GitHubWebhook.html#method_handle", "name": "SnooPHP\\Git\\GitHubWebhook::handle", "doc": "&quot;Handle a webhook request coming from github&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Git", "fromLink": "SnooPHP/Git.html", "link": "SnooPHP/Git/Webhook.html", "name": "SnooPHP\\Git\\Webhook", "doc": "&quot;A generic webhook&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Git\\Webhook", "fromLink": "SnooPHP/Git/Webhook.html", "link": "SnooPHP/Git/Webhook.html#method_handle", "name": "SnooPHP\\Git\\Webhook::handle", "doc": "&quot;Handle a webhook request&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Http", "fromLink": "SnooPHP/Http.html", "link": "SnooPHP/Http/Redirect.html", "name": "SnooPHP\\Http\\Redirect", "doc": "&quot;Handles redirection&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Http\\Redirect", "fromLink": "SnooPHP/Http/Redirect.html", "link": "SnooPHP/Http/Redirect.html#method___construct", "name": "SnooPHP\\Http\\Redirect::__construct", "doc": "&quot;Create a new redirect response&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Redirect", "fromLink": "SnooPHP/Http/Redirect.html", "link": "SnooPHP/Http/Redirect.html#method_parse", "name": "SnooPHP\\Http\\Redirect::parse", "doc": "&quot;Parse response and redirect&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Redirect", "fromLink": "SnooPHP/Http/Redirect.html", "link": "SnooPHP/Http/Redirect.html#method_now", "name": "SnooPHP\\Http\\Redirect::now", "doc": "&quot;Immediately redirect&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Http", "fromLink": "SnooPHP/Http.html", "link": "SnooPHP/Http/Request.html", "name": "SnooPHP\\Http\\Request", "doc": "&quot;Http request object&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method___construct", "name": "SnooPHP\\Http\\Request::__construct", "doc": "&quot;Create a new request&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_url", "name": "SnooPHP\\Http\\Request::url", "doc": "&quot;Return request url&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_method", "name": "SnooPHP\\Http\\Request::method", "doc": "&quot;Return request method&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_time", "name": "SnooPHP\\Http\\Request::time", "doc": "&quot;Return request timestamp&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_header", "name": "SnooPHP\\Http\\Request::header", "doc": "&quot;Return all request headers or a specific one&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_input", "name": "SnooPHP\\Http\\Request::input", "doc": "&quot;Return request input&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_file", "name": "SnooPHP\\Http\\Request::file", "doc": "&quot;Return request input files&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_validateInput", "name": "SnooPHP\\Http\\Request::validateInput", "doc": "&quot;Return true if input is valid&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_injectInput", "name": "SnooPHP\\Http\\Request::injectInput", "doc": "&quot;Inject input (use carefully)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_forward", "name": "SnooPHP\\Http\\Request::forward", "doc": "&quot;Forward this request to another host&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_current", "name": "SnooPHP\\Http\\Request::current", "doc": "&quot;Return current request&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Request", "fromLink": "SnooPHP/Http/Request.html", "link": "SnooPHP/Http/Request.html#method_test", "name": "SnooPHP\\Http\\Request::test", "doc": "&quot;A quick test request&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Http", "fromLink": "SnooPHP/Http.html", "link": "SnooPHP/Http/Response.html", "name": "SnooPHP\\Http\\Response", "doc": "&quot;Response to send to the client&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method___construct", "name": "SnooPHP\\Http\\Response::__construct", "doc": "&quot;Create a new response&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_parse", "name": "SnooPHP\\Http\\Response::parse", "doc": "&quot;Apply response&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_content", "name": "SnooPHP\\Http\\Response::content", "doc": "&quot;Get or set content&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_code", "name": "SnooPHP\\Http\\Response::code", "doc": "&quot;Get or set http code&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_header", "name": "SnooPHP\\Http\\Response::header", "doc": "&quot;Get or set header&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_view", "name": "SnooPHP\\Http\\Response::view", "doc": "&quot;Return view (parse php)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_json", "name": "SnooPHP\\Http\\Response::json", "doc": "&quot;Return json content&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_resource", "name": "SnooPHP\\Http\\Response::resource", "doc": "&quot;Return a resource (file)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Response", "fromLink": "SnooPHP/Http/Response.html", "link": "SnooPHP/Http/Response.html#method_abort", "name": "SnooPHP\\Http\\Response::abort", "doc": "&quot;Generate an error response&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Http", "fromLink": "SnooPHP/Http.html", "link": "SnooPHP/Http/Route.html", "name": "SnooPHP\\Http\\Route", "doc": "&quot;A Route for the application&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method___construct", "name": "SnooPHP\\Http\\Route::__construct", "doc": "&quot;Create a new route&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_url", "name": "SnooPHP\\Http\\Route::url", "doc": "&quot;Get or set route url&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_method", "name": "SnooPHP\\Http\\Route::method", "doc": "&quot;Get or set route method&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_action", "name": "SnooPHP\\Http\\Route::action", "doc": "&quot;Get or set route action&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_name", "name": "SnooPHP\\Http\\Route::name", "doc": "&quot;Get or set route name&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_args", "name": "SnooPHP\\Http\\Route::args", "doc": "&quot;Get route arguments&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Route", "fromLink": "SnooPHP/Http/Route.html", "link": "SnooPHP/Http/Route.html#method_match", "name": "SnooPHP\\Http\\Route::match", "doc": "&quot;Determine if test string matches this route&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Http", "fromLink": "SnooPHP/Http.html", "link": "SnooPHP/Http/Router.html", "name": "SnooPHP\\Http\\Router", "doc": "&quot;Route manager&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method___construct", "name": "SnooPHP\\Http\\Router::__construct", "doc": "&quot;Create a new router&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_base", "name": "SnooPHP\\Http\\Router::base", "doc": "&quot;Get or set router base&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_handle", "name": "SnooPHP\\Http\\Router::handle", "doc": "&quot;Parse request&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_get", "name": "SnooPHP\\Http\\Router::get", "doc": "&quot;Add a GET route&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_post", "name": "SnooPHP\\Http\\Router::post", "doc": "&quot;Add a POST route&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_put", "name": "SnooPHP\\Http\\Router::put", "doc": "&quot;Add a PUT route&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_delete", "name": "SnooPHP\\Http\\Router::delete", "doc": "&quot;Add a DELETE route&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_error", "name": "SnooPHP\\Http\\Router::error", "doc": "&quot;Get or set error action&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_errorAction", "name": "SnooPHP\\Http\\Router::errorAction", "doc": "&quot;Alias for error action&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_match", "name": "SnooPHP\\Http\\Router::match", "doc": "&quot;Return response of first route that matches, false otherwise&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Http\\Router", "fromLink": "SnooPHP/Http/Router.html", "link": "SnooPHP/Http/Router.html#method_add", "name": "SnooPHP\\Http\\Router::add", "doc": "&quot;Add a generic route&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Imgur", "fromLink": "SnooPHP/Imgur.html", "link": "SnooPHP/Imgur/Api.html", "name": "SnooPHP\\Imgur\\Api", "doc": "&quot;Perform raw api requests or use dedicated methods&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method___construct", "name": "SnooPHP\\Imgur\\Api::__construct", "doc": "&quot;Create a new instance&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_lastResult", "name": "SnooPHP\\Imgur\\Api::lastResult", "doc": "&quot;Return last result&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_image", "name": "SnooPHP\\Imgur\\Api::image", "doc": "&quot;Returns an empty Image resource&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_album", "name": "SnooPHP\\Imgur\\Api::album", "doc": "&quot;Returns an empty Album resource&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_query", "name": "SnooPHP\\Imgur\\Api::query", "doc": "&quot;Perform a generic query&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_anonToken", "name": "SnooPHP\\Imgur\\Api::anonToken", "doc": "&quot;Get an anonymous token&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_withClient", "name": "SnooPHP\\Imgur\\Api::withClient", "doc": "&quot;Create a new instance from client id and client secret&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_withToken", "name": "SnooPHP\\Imgur\\Api::withToken", "doc": "&quot;Create a new instance from existing access token&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Api", "fromLink": "SnooPHP/Imgur/Api.html", "link": "SnooPHP/Imgur/Api.html#method_defaultCacheClass", "name": "SnooPHP\\Imgur\\Api::defaultCacheClass", "doc": "&quot;Set or get default cache class for this session&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Imgur", "fromLink": "SnooPHP/Imgur.html", "link": "SnooPHP/Imgur/Image.html", "name": "SnooPHP\\Imgur\\Image", "doc": "&quot;An image returned by the Imgur API&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Imgur\\Image", "fromLink": "SnooPHP/Imgur/Image.html", "link": "SnooPHP/Imgur/Image.html#method_fetch", "name": "SnooPHP\\Imgur\\Image::fetch", "doc": "&quot;Fetch an image by id&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Image", "fromLink": "SnooPHP/Imgur/Image.html", "link": "SnooPHP/Imgur/Image.html#method_upload", "name": "SnooPHP\\Imgur\\Image::upload", "doc": "&quot;Upload an image&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Imgur", "fromLink": "SnooPHP/Imgur.html", "link": "SnooPHP/Imgur/Resource.html", "name": "SnooPHP\\Imgur\\Resource", "doc": "&quot;A generic resource returned by the Imgur API&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Imgur\\Resource", "fromLink": "SnooPHP/Imgur/Resource.html", "link": "SnooPHP/Imgur/Resource.html#method___construct", "name": "SnooPHP\\Imgur\\Resource::__construct", "doc": "&quot;Create a new resource&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Imgur\\Resource", "fromLink": "SnooPHP/Imgur/Resource.html", "link": "SnooPHP/Imgur/Resource.html#method_api", "name": "SnooPHP\\Imgur\\Resource::api", "doc": "&quot;Get or set api associated with this resource&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Collection.html", "name": "SnooPHP\\Model\\Collection", "doc": "&quot;Wrapper for array of models&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method___construct", "name": "SnooPHP\\Model\\Collection::__construct", "doc": "&quot;Create a new collection from a set of models&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_array", "name": "SnooPHP\\Model\\Collection::array", "doc": "&quot;Return array of models&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_size", "name": "SnooPHP\\Model\\Collection::size", "doc": "&quot;Return number of models&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_num", "name": "SnooPHP\\Model\\Collection::num", "doc": "&quot;Return number of models&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_empty", "name": "SnooPHP\\Model\\Collection::empty", "doc": "&quot;Return true if empty&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_get", "name": "SnooPHP\\Model\\Collection::get", "doc": "&quot;Return i-th element (if 0 &amp;lt;= i &amp;lt; size)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_first", "name": "SnooPHP\\Model\\Collection::first", "doc": "&quot;Return first element (if exists)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_last", "name": "SnooPHP\\Model\\Collection::last", "doc": "&quot;Return last element (if exists)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_find", "name": "SnooPHP\\Model\\Collection::find", "doc": "&quot;Find an element&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_each", "name": "SnooPHP\\Model\\Collection::each", "doc": "&quot;Run function on each model instance (can only modify instance property)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_expand", "name": "SnooPHP\\Model\\Collection::expand", "doc": "&quot;Expands nodes within this collection&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Collection", "fromLink": "SnooPHP/Model/Collection.html", "link": "SnooPHP/Model/Collection.html#method_append", "name": "SnooPHP\\Model\\Collection::append", "doc": "&quot;Append another collection&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Column.html", "name": "SnooPHP\\Model\\Column", "doc": "&quot;A column is a field of a table with a type and optional properties&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method___construct", "name": "SnooPHP\\Model\\Column::__construct", "doc": "&quot;Create a column&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_name", "name": "SnooPHP\\Model\\Column::name", "doc": "&quot;Get column name&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_type", "name": "SnooPHP\\Model\\Column::type", "doc": "&quot;Get column type&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_property", "name": "SnooPHP\\Model\\Column::property", "doc": "&quot;Get column property(ies)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_notNullable", "name": "SnooPHP\\Model\\Column::notNullable", "doc": "&quot;Set nullable or not nullable&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_nullable", "name": "SnooPHP\\Model\\Column::nullable", "doc": "&quot;Explicity set this column to be nullable&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_size", "name": "SnooPHP\\Model\\Column::size", "doc": "&quot;Set data size&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_default", "name": "SnooPHP\\Model\\Column::default", "doc": "&quot;Set default&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_unsigned", "name": "SnooPHP\\Model\\Column::unsigned", "doc": "&quot;Set unsigned&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_autoIncrement", "name": "SnooPHP\\Model\\Column::autoIncrement", "doc": "&quot;Set auto increment&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_onUpdate", "name": "SnooPHP\\Model\\Column::onUpdate", "doc": "&quot;Set on update property of timestamp&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_unique", "name": "SnooPHP\\Model\\Column::unique", "doc": "&quot;Make unique key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_uniqueComposite", "name": "SnooPHP\\Model\\Column::uniqueComposite", "doc": "&quot;Make composite unique key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_primary", "name": "SnooPHP\\Model\\Column::primary", "doc": "&quot;Make primary key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_primaryComposite", "name": "SnooPHP\\Model\\Column::primaryComposite", "doc": "&quot;Make composite primary key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_references", "name": "SnooPHP\\Model\\Column::references", "doc": "&quot;Make foreign key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_referencesComposite", "name": "SnooPHP\\Model\\Column::referencesComposite", "doc": "&quot;Make composite foreign key&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_declaration", "name": "SnooPHP\\Model\\Column::declaration", "doc": "&quot;Return column declaration (no constraints)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_constraintsDeclarations", "name": "SnooPHP\\Model\\Column::constraintsDeclarations", "doc": "&quot;Return constraints declarations&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Column", "fromLink": "SnooPHP/Model/Column.html", "link": "SnooPHP/Model/Column.html#method_set", "name": "SnooPHP\\Model\\Column::set", "doc": "&quot;Set column property&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Db.html", "name": "SnooPHP\\Model\\Db", "doc": "&quot;Wrapper for mysql database operations&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_query", "name": "SnooPHP\\Model\\Db::query", "doc": "&quot;Perform a generic query statement&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_beginTransaction", "name": "SnooPHP\\Model\\Db::beginTransaction", "doc": "&quot;Begin database transaction&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_commit", "name": "SnooPHP\\Model\\Db::commit", "doc": "&quot;Commit transaction&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_rollBack", "name": "SnooPHP\\Model\\Db::rollBack", "doc": "&quot;Rollback transaction&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_attribute", "name": "SnooPHP\\Model\\Db::attribute", "doc": "&quot;Get or set a connection attribute&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_lastError", "name": "SnooPHP\\Model\\Db::lastError", "doc": "&quot;Get last database error&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Db", "fromLink": "SnooPHP/Model/Db.html", "link": "SnooPHP/Model/Db.html#method_instance", "name": "SnooPHP\\Model\\Db::instance", "doc": "&quot;Get PDO instance&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Model.html", "name": "SnooPHP\\Model\\Model", "doc": "&quot;A model represents an object of the application\nEach model has a 1:1 connection with a related db table (e.g. User -&gt; users)&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method___construct", "name": "SnooPHP\\Model\\Model::__construct", "doc": "&quot;Create a new model&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_select", "name": "SnooPHP\\Model\\Model::select", "doc": "&quot;Run query on this table and return model&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_find", "name": "SnooPHP\\Model\\Model::find", "doc": "&quot;Find model and return it&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_has", "name": "SnooPHP\\Model\\Model::has", "doc": "&quot;One-to-one relationship&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_hasMany", "name": "SnooPHP\\Model\\Model::hasMany", "doc": "&quot;One-to-many relationship&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_belongsTo", "name": "SnooPHP\\Model\\Model::belongsTo", "doc": "&quot;One-to-one inverse relationship&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_save", "name": "SnooPHP\\Model\\Model::save", "doc": "&quot;Save object to database, updating or inserting a new row&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_delete", "name": "SnooPHP\\Model\\Model::delete", "doc": "&quot;Delete this model from table&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_deleteWhere", "name": "SnooPHP\\Model\\Model::deleteWhere", "doc": "&quot;Delete all models that match condition&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_purge", "name": "SnooPHP\\Model\\Model::purge", "doc": "&quot;Purge this model collection&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_resetAutoIncrement", "name": "SnooPHP\\Model\\Model::resetAutoIncrement", "doc": "&quot;Reset auto increment value&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_json", "name": "SnooPHP\\Model\\Model::json", "doc": "&quot;Return a json representation of the model&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_toString", "name": "SnooPHP\\Model\\Model::toString", "doc": "&quot;Return a string representation of the model&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_tableName", "name": "SnooPHP\\Model\\Model::tableName", "doc": "&quot;Return the table name&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_modelName", "name": "SnooPHP\\Model\\Model::modelName", "doc": "&quot;Return the name of this model&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_decodeValue", "name": "SnooPHP\\Model\\Model::decodeValue", "doc": "&quot;Convert value coming from database&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_encodeValue", "name": "SnooPHP\\Model\\Model::encodeValue", "doc": "&quot;Convert column to string&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Model", "fromLink": "SnooPHP/Model/Model.html", "link": "SnooPHP/Model/Model.html#method_tableColumns", "name": "SnooPHP\\Model\\Model::tableColumns", "doc": "&quot;Return name of table columns&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Node.html", "name": "SnooPHP\\Model\\Node", "doc": "&quot;A node ispired by the concept of node in the facebook api graph&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Node", "fromLink": "SnooPHP/Model/Node.html", "link": "SnooPHP/Model/Node.html#method_expand", "name": "SnooPHP\\Model\\Node::expand", "doc": "&quot;Expand edges of this node&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Node", "fromLink": "SnooPHP/Model/Node.html", "link": "SnooPHP/Model/Node.html#method_parseEdgesString", "name": "SnooPHP\\Model\\Node::parseEdgesString", "doc": "&quot;Takes a string of edges to expand and returns an array or a json string&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Model", "fromLink": "SnooPHP/Model.html", "link": "SnooPHP/Model/Table.html", "name": "SnooPHP\\Model\\Table", "doc": "&quot;A table is used to create a migration plan&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method___construct", "name": "SnooPHP\\Model\\Table::__construct", "doc": "&quot;Create a new table (doesn&#039;t run CREATE TABLE)&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_name", "name": "SnooPHP\\Model\\Table::name", "doc": "&quot;Get name&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_columns", "name": "SnooPHP\\Model\\Table::columns", "doc": "&quot;Get columns&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_dependent", "name": "SnooPHP\\Model\\Table::dependent", "doc": "&quot;Returns true if depends on other tables&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_id", "name": "SnooPHP\\Model\\Table::id", "doc": "&quot;Add an auto increment primary column&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_timestamps", "name": "SnooPHP\\Model\\Table::timestamps", "doc": "&quot;Adds created and modified timestamps&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_string", "name": "SnooPHP\\Model\\Table::string", "doc": "&quot;Add a string (varchar) column with an optional size&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_integer", "name": "SnooPHP\\Model\\Table::integer", "doc": "&quot;Add an integer column with an optional size&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_int", "name": "SnooPHP\\Model\\Table::int", "doc": "&quot;Alias for integer&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_uint", "name": "SnooPHP\\Model\\Table::uint", "doc": "&quot;Add an unsigned int column with an optional size&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_bool", "name": "SnooPHP\\Model\\Table::bool", "doc": "&quot;Add a boolean column (using TINYINT(1))&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_timestamp", "name": "SnooPHP\\Model\\Table::timestamp", "doc": "&quot;Add a timestamp column&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_json", "name": "SnooPHP\\Model\\Table::json", "doc": "&quot;Add a json column&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_add", "name": "SnooPHP\\Model\\Table::add", "doc": "&quot;Add column to table&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_generateDependencies", "name": "SnooPHP\\Model\\Table::generateDependencies", "doc": "&quot;Compute dependencies&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_removeDependency", "name": "SnooPHP\\Model\\Table::removeDependency", "doc": "&quot;Remove satisfied dependency and return new list&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_createQuery", "name": "SnooPHP\\Model\\Table::createQuery", "doc": "&quot;Get query string&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_create", "name": "SnooPHP\\Model\\Table::create", "doc": "&quot;Attemp to create a table with &#039;create table&#039; instruction&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_drop", "name": "SnooPHP\\Model\\Table::drop", "doc": "&quot;Drop the table&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Model\\Table", "fromLink": "SnooPHP/Model/Table.html", "link": "SnooPHP/Model/Table.html#method_migrate", "name": "SnooPHP\\Model\\Table::migrate", "doc": "&quot;Run migration for this table&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Utils", "fromLink": "SnooPHP/Utils.html", "link": "SnooPHP/Utils/Utils.html", "name": "SnooPHP\\Utils\\Utils", "doc": "&quot;Set of utility methods&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_view", "name": "SnooPHP\\Utils\\Utils::view", "doc": "&quot;Include view&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_vueComponent", "name": "SnooPHP\\Utils\\Utils::vueComponent", "doc": "&quot;Include a vue component&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_compileStyle", "name": "SnooPHP\\Utils\\Utils::compileStyle", "doc": "&quot;Compile style content using specified css preprocessor&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_minifyJs", "name": "SnooPHP\\Utils\\Utils::minifyJs", "doc": "&quot;Minify javascript using uglify-js if available&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_toJson", "name": "SnooPHP\\Utils\\Utils::toJson", "doc": "&quot;Convert to json string&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_fromJson", "name": "SnooPHP\\Utils\\Utils::fromJson", "doc": "&quot;Decode from json string&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_errors", "name": "SnooPHP\\Utils\\Utils::errors", "doc": "&quot;Get or set session errors&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_flushErrors", "name": "SnooPHP\\Utils\\Utils::flushErrors", "doc": "&quot;Flush all errors&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_publicPath", "name": "SnooPHP\\Utils\\Utils::publicPath", "doc": "&quot;Get path relative to public folder&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_parseValue", "name": "SnooPHP\\Utils\\Utils::parseValue", "doc": "&quot;Parse string as value&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Utils\\Utils", "fromLink": "SnooPHP/Utils/Utils.html", "link": "SnooPHP/Utils/Utils.html#method_validateIp", "name": "SnooPHP\\Utils\\Utils::validateIp", "doc": "&quot;Check ip address against a test ip&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Vue", "fromLink": "SnooPHP/Vue.html", "link": "SnooPHP/Vue/Component.html", "name": "SnooPHP\\Vue\\Component", "doc": "&quot;Methods to handle vue components&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method___construct", "name": "SnooPHP\\Vue\\Component::__construct", "doc": "&quot;Create a new vue component&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_valid", "name": "SnooPHP\\Vue\\Component::valid", "doc": "&quot;Return true if component is valid&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_template", "name": "SnooPHP\\Vue\\Component::template", "doc": "&quot;Return component template&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_script", "name": "SnooPHP\\Vue\\Component::script", "doc": "&quot;Return component script&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_style", "name": "SnooPHP\\Vue\\Component::style", "doc": "&quot;Return component style&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_parse", "name": "SnooPHP\\Vue\\Component::parse", "doc": "&quot;Parse template, script and style blocks&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_parseTemplate", "name": "SnooPHP\\Vue\\Component::parseTemplate", "doc": "&quot;Parse template block&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_parseScript", "name": "SnooPHP\\Vue\\Component::parseScript", "doc": "&quot;Parse script block&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_parseStyle", "name": "SnooPHP\\Vue\\Component::parseStyle", "doc": "&quot;Parse style blocks&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_applyScope", "name": "SnooPHP\\Vue\\Component::applyScope", "doc": "&quot;Apply scope to selector&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Component", "fromLink": "SnooPHP/Vue/Component.html", "link": "SnooPHP/Vue/Component.html#method_create", "name": "SnooPHP\\Vue\\Component::create", "doc": "&quot;Include a vue component&quot;"},
            
            {"type": "Class", "fromName": "SnooPHP\\Vue", "fromLink": "SnooPHP/Vue.html", "link": "SnooPHP/Vue/Vue.html", "name": "SnooPHP\\Vue\\Vue", "doc": "&quot;Root component&quot;"},
                                                        {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method___construct", "name": "SnooPHP\\Vue\\Vue::__construct", "doc": "&quot;Register component globally&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method_parse", "name": "SnooPHP\\Vue\\Vue::parse", "doc": "&quot;The root component doesn&#039;t have a template block&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method_parseScript", "name": "SnooPHP\\Vue\\Vue::parseScript", "doc": "&quot;Parse script block&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method_register", "name": "SnooPHP\\Vue\\Vue::register", "doc": "&quot;Register a sub-component&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method_document", "name": "SnooPHP\\Vue\\Vue::document", "doc": "&quot;Get full document&quot;"},
                    {"type": "Method", "fromName": "SnooPHP\\Vue\\Vue", "fromLink": "SnooPHP/Vue/Vue.html", "link": "SnooPHP/Vue/Vue.html#method_create", "name": "SnooPHP\\Vue\\Vue::create", "doc": "&quot;Return a vue page&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


