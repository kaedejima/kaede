
function navbar(page) {
  var navbar = "<nav class='navbar navbar-expand-lg navbar-dark static-top fixed-top'> <div class='container'> <a class='navbar-brand' href='./index.html'> <img id='kdlogo' src='./images/kdlogo.png' alt=''> </a> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' id='hamburger'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbarResponsive'> <ul class='navbar-nav ml-auto'> <li class='nav-item'> <a class='nav-link' id='nav-home' href='./index.html'>Home </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-about' href='index.html#about'>About</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-skills' href='index.html#skills'>Skills</a> </li> <li class='nav-item'> <a class='nav-link' id='nav-works' href='index.html#works'>Works </a> </li> <li class='nav-item'> <a class='nav-link' id='nav-sayhi' href='#say-hi'>Say-Hi!</a> </li> </ul> </div> </div> </nav>";
  document.write(navbar);
  (function () {
    document.getElementById("nav-" + page).classList.toggle("active")
  })();
};

function top_area() {
  var top_area = "<div class='jumbotron jumbotron-extend'> <div class='container jumbotron-container'> <div id='top-sq' class='mx-auto text-center'> <div class='py-5'> <h4>KD</h4> <p>1999 May 23</p> <h6>Studying Computer Science and Communication Engineering at Waseda University</h6> </div> </div> </div> </div>";
  document.write(top_area);
}

function say_hi() {
  var say_hi = "<div id='say-hi' class=' section container-fluid'> <div class='container'> <div class='section-title text-center'> <h3>Hello, this is KD!</h3> <hr> <p>その他</p> </div> <div class='text-center form form-border links-block'> <h4 class='lang-eng'>Thank you for taking time to visit here. <br>Have a nice day!</h4> <h5 class='lang-jpn inactive'>ご覧いただき、ありがとうございました！ <br>またお会いしましょう</h5> <div class='row justify-content-center'> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://github.com/kaedejima/'> <i class='fab fa-github fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://github.com/kaedejima/'>Github</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kd-kaede/'> <i class='fab fa-linkedin fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/kd-kaede/'>LinkedIn</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://qiita.com/frogie'> <span class='fa-stack'> <i class='fa fa-square fa-stack-2x' aria-hidden='true'></i> <i class='fa fa-search fa-stack-1x fa-inverse fa-2x' style='color: #FDD968;' aria-hidden='true'></i> </span> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://qiita.com/frogie'>Qiita</a> </div> <div class='col-2 btn btn-secondary back-yellow btn-mylinks'> <a target='_blank' rel='noopener noreferrer' href='https://note.com/soupy'> <i class='far fa-sticky-note fa-2x' aria-hidden='true'> </i> </a> <br> <a target='_blank' rel='noopener noreferrer' href='https://note.com/soupy'>note</a> </div> </div> </div> </div> </div>";
  document.write(say_hi);
}

function footer() {
  var footer = "<footer class='font-small pt-4'> <div class='container text-center text-md-left'> <a href='./index.html'> <img id='kdlogo-name' src='./images/kdlogo-name-sm.png' class='d-block mx-auto mb-4'> </a> <!-- <p>Busy doing nothing...</p> --> <div class='row justify-content-center mb-4'> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='./index.html#about' class='text-light'>About</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='./index.html#skills' class='text-light'>Skills</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='work-home.html' class='text-light'>Works</a> </p> </h6> </div> <div class='col-xs-6 col-sm-2 mx-auto'> <!-- Links --> <h6 class='text-uppercase font-weight-bold'> <p> <a href='#say-hi' class='text-light'>Say-Hi!</a> </p> </h6> </div> </div> </div> <!-- Copyright --> <div class='footer-copyright text-center py-3 back-brown'>© 2021 KD</div> <!-- Copyright --> </footer>";
  document.write(footer);
}

function about() {
  var about = "<div id='about' class='section back-white'> <div class='container'> <div class='section-title text-center'> <h3>About</h3> <hr /> <p>自己紹介</p> </div> <div id='about-contents' class='mx-auto mb-4'> <div class='row row-eq-height align-items-center'> <div class='col-md-6 width-300 drop-shadow'> <a> <img src='./images/profile-icon-01.png' class='img-fluid mx-auto d-block'> </a> </div> <div class='col-md-6'> <span class='my-4 lang-eng'> Hello &#x1f44b; Thank you for taking time visiting my portfolio page! <br> Currently studying Computer Science and a undergraduate student in Waseda University in Tokyo. <br> I enjoy &#x1f3c0;, &#x1f469;&#x200d;&#x1f4bb;, and &#x1f4da;. <br> Hope you would know more about me. </span> <span class='my-4 lang-jpn inactive'> こんにちは &#x1f44b; ポートフォリオページをご覧いただき、<br>ありがとうございます！ <br> 早稲田大学でコンピュータサイエンスを勉強しています。 <br> 好きなもの &#x1f3c0;・ &#x1f469;&#x200d;&#x1f4bb;・ &#x1f4da;. </span> <div class='text-center'> <a href='https://github.com/kaedejima/' target='_blank' rel='noopener noreferrer' class='btn btn-secondary back-white btn-mylinks '><i class='fab fa-github fa-2x align-middle'></i> GitHub </a> </div> </div> </div> <div class='section-sub'> <h4 class='text-center section-title-sub back-white mx-auto'>Experience</h4> <div class='row lang-eng'> <div class='col-lg-8 mx-auto'> <!-- <h4>Internships/Hackathons</h4> --> <ul> <li>2018- <strong>Waseda Advertising Society</strong> Movie Advertising Team </li> <li>2019- <strong>Life is Tech!</strong> Android/WebService mentor </li> <li>2019- <strong>Tentoten</strong> Web Designer</li> <li>2019 <strong>DreamOnline</strong> Web Designer</li> <li>2019 <strong>Johnson & Johnson Singapore</strong> Summer Internship</li> <li>2019 <strong>PADERO</strong> Hackathon, PADERO robotics workshop</li> <li>2020 <strong>Washizaki Lab.</strong> DevOps research</li> <li>2020 <strong>SIG Software Engineering</strong> SES2020 Poster presntation</li> <li>2020 <strong>Japan Research Institute</strong> DX Engineer</li> <li>2020 <strong>enPiT AiBiC</strong> enPiT Summer Workshop</li> <li>2020 <strong>Honiden-Tei Lab.</strong> IoT(RaspberryPi) and face detection application development</li> </ul> </div> </div> <div class='row lang-jpn inactive'> <div class='col-lg-8 mx-auto'> <!-- <h4>Internships/Hackathons</h4> --> <ul> <li>2018- <strong>早稲田大学広告研究会</strong> 映像広告チーム・早稲田広告</li> <li>2019- <strong>Life is Tech!</strong> インターンシップ Android/Webサービス メンター</li> <li>2019- <strong>テントテン</strong> インターンシップ Web デザイナー</li> <li>2019 <strong>DreamOnline</strong> インターンシップWeb Designer</li> <li>2019 <strong>ジョンソンアンドジョンソンシンガポール</strong> インターンシップ</li> <li>2019 <strong>PADERO</strong> ハッカソン, PADERO ロボティクスワークショップ</li> <li>2020 <strong>鷲崎研究室</strong> DevOps 研究</li> <li>2020 <strong>情報処理学会ソフトウェア工学研究会</strong> SES2020 ポスター発表</li> <li>2020 <strong>日本総合研究所</strong> インターンシップ DX エンジニア</li> <li>2020 <strong>enPiT AiBiC</strong> enPiT 夏合宿 2020</li> <li>2020 <strong>本位田・鄭研究室</strong> IoT(ラスパイ)、顔認識を使ったアプリケーション開発</li> </ul> </div> </div> <div class='text-center w-75 mx-auto'> <a href='experience.html' class='btn btn-secondary back-brown text-uppercase drop-shadow w-50 mx-auto'>See more</a> </div> </div> </div> </div> </div>";
  document.write(about);
}