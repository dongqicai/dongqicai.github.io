$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / div');
        comp_comp1.code = '<div class="col-xs-12 col-md-8">\
    <h3>Dongqi Cai (蔡东琪)</h3>\
    I am currently an AI research scientist at Intel Labs China. I got my Ph.D. degree from Beijing University of Posts and Telecommunications (BUPT) in March 2016, advised by Prof. Fei Su.&nbsp;\
\
    <div>\
        <p>3rd-year doctoral student at Peking University, advised by Prof. <span class="text-warning"><a href="http://www.cis.pku.edu.cn/vision/Visual&amp;Robot/people/zha/">Hongbin Zha</a></span>. I got my master degree in Harbin Engineering University, and got my bechlor degree in Harbin Institute of Technology.</p><br>\
        My research interests include <strong>dense SLAM</strong> and <strong>scene flow estimation</strong>. The major focus is to explore how a new scene representation can better enable the spatial intelligent for a mobile device.<br>\
        <h3>Education: </h3>\
        <p>\
		   Ph. D., Electronic Engineering and Computer Science, <a href="https://english.pku.edu.cn/" target="_blank"> Peking University</a>, China<br>\
           M. Phil., Information and Communication Engineering, <a href="http://english.hrbeu.edu.cn" target="_blank">Harbin Engineering University</a>, China<br>\
           B. Eng., &nbsp;Electrical Engineering and Automation, <a href="http://en.hit.edu.cn" target="_blank">Harbin Institute of Technology</a>, China </p>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});