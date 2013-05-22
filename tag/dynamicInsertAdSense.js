<script>
window.google_ad_client = "123456789";
window.google_ad_slot = "123456789";
window.google_ad_width = 200;
window.google_ad_height = 200;

// container is where you want the ad to be inserted
var container = document.getElementById('ad_container');
var w = document.write;
document.write = function (content) {
    container.innerHTML = content;
    document.write = w;
};

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://pagead2.googlesyndication.com/pagead/show_ads.js';
document.body.appendChild(script);
//http://stackoverflow.com/questions/6197768/dynamic-adsense-insertion-with-javascript
//http://blog.figmentengine.com/2011/08/google-ads-async-asynchronous.html
</script>


