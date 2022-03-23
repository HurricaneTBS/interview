重置密码英文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Go Web</title>
    <style>
      * {
        box-sizing: border-box;
      }

      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .top_container {
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }

      .main_container .top_container img {
        width: 198px;
        height: 43px;
      }
      .top_text {
        width: 158px;
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .title2 {
        margin-bottom: 29px;
      }
      .hover1 {
        margin-bottom: 39px;
        color: #2e6fd1;
      }
      .title3 {
        margin-bottom: 39px;
      }
      .title4 {
        margin-bottom: 29px;
      }
      .title5 {
        margin-bottom: 49px;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        text-align: center;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_en.svg" alt="" />
          <div class="top_text">Being a professional service provider makes trade easier</div>
        </div>
        <div class="title">Dear&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">To reset your password, please click the link below within 60 minutes.</div>
        <a class="hover1" href="{{.Url}}"> Click here>> </a>
        <div class="title3">If you unable click the link, please copy the following link to the browser within 60 minutes.</div>
        <a style="margin-bottom: 29px" href="{{.Url}}"> {{.Url}}</a>
        <div class="title4">If you don't try this operation, other users may have accidentally used your email. Please ignore this message!</div>
        <div class="title5">(Note that the email does not support receiving reply messages)</div>
        <div class="footer" style="padding: 6px 0">
          <div style="margin-bottom: 2px">(0571) 8627 3270</div>
          Copyright © 2021 Hangzhou Yidu Network Technology Co., Ltd All Right Reserved.
        </div>
      </div>
    </div>
  </body>
</html>
```

重置密码中文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Go Web</title>
    <style>
      * {
        box-sizing: border-box;
      }
      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .top_container {
        height: 81px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }

      .main_container .top_container img {
        width: 100px;
        height: 42px;
      }
      .top_text {
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .title2 {
        margin-bottom: 29px;
      }
      .hover1 {
        margin-bottom: 39px;
        color: #2e6fd1;
      }
      .title3 {
        margin-bottom: 39px;
      }
      .title4 {
        margin-bottom: 29px;
      }
      .title5 {
        margin-bottom: 49px;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        text-align: center;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_zh.svg" alt="" />
          <div class="top_text">做专业的服务者，让贸易更有效率</div>
        </div>
        <div class="title">亲爱的&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">要重置您的密码，请在60分钟内点击以下链接。</div>
        <a class="hover1" href="{{.Url}}"> 点击这里>> </a>
        <div class="title3">如果无法点击以上链接，请在60分钟内将以下链接复制到浏览器中。</div>
        <a style="margin-bottom: 29px" href="{{.Url}}"> {{.Url}}</a>
        <div class="title4">如果您没有尝试此操作，其他用户可能不小心使用了您的电子邮件。请忽略此消息！</div>
        <div class="title5">(注意邮箱不支持接收回复信息）</div>
        <div class="footer" style="padding: 6px 0">
          <div style="margin-bottom: 2px">(0571) 8627 3270</div>
          Copyright © 2021 杭州亿渡网络科技有限公司 All Right Reserved.
        </div>
      </div>
    </div>
  </body>
</html>
```

验证码英文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>验证码</title>
    <style>
      body {
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }
      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .top_container {
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }

      .main_container .top_container img {
        width: 198px;
        height: 43px;
      }
      .top_text {
        width: 158px;
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .hover1 {
        color: #2e6fd1;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        font-size: 12px;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 17px;
        color: #ffffff;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_en.svg" alt="" />
          <div class="top_text">Being a professional service provider makes trade easier</div>
        </div>
        <div class="title">Dear&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">
          Hello, your account is being modified. The verification code of this request is
          <a class="hover1" href="#">{{.Code}}</a>. If you don't operate by yourself, please ignore this email!
        </div>
        <div class="footer">
          <div>(0571) 8627 3270</div>
          Copyright © 2021 Hangzhou Yidu Network Technology Co., Ltd All Right Reserved.
        </div>
      </div>
    </div>
  </body>
</html>
```

验证码中文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>验证码</title>
    <style>
      body {
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .top_container {
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }

      .main_container .top_container img {
        width: 100px;
        height: 43px;
      }
      .top_text {
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .hover1 {
        color: #2e6fd1;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        font-size: 12px;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 17px;
        color: #ffffff;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_zh.svg" alt="" />
          <div class="top_text">做专业的服务者，让贸易更有效率</div>
        </div>
        <div class="title">亲爱的&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">
          您好，您的账号正在进行修改电子邮箱操作，本次请求的验证码为：
          <a class="hover1" href="#">{{.Code}}</a>。如非本人操作，请忽略此邮件
        </div>
        <div class="footer">
          <div>(0571) 8627 3270</div>
          Copyright © 2021 杭州亿渡网络科技有限公司 All Right Reserved.
        </div>
      </div>
    </div>
  </body>
</html>
```

验证邮箱中文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Go Web</title>
    <style>
      * {
        box-sizing: border-box;
      }

      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .top_container {
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }

      .main_container .top_container img {
        width: 100px;
        height: 43px;
      }
      .top_text {
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .title2 {
        margin-bottom: 29px;
      }
      .hover1 {
        margin-bottom: 39px;
        color: #2e6fd1;
      }
      .title3 {
        margin-bottom: 39px;
      }
      .title4 {
        margin-bottom: 29px;
      }
      .title5 {
        margin-bottom: 49px;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        text-align: center;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_zh.svg" alt="" />
          <div class="top_text">做专业的服务者，让贸易更有效率</div>
        </div>
        <div class="title">亲爱的&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">感谢您注册化工球平台，请点击以下链接验证您的邮箱。</div>
        <a class="hover1" href="{{.Url}}"> 点击这里>> </a>
        <div class="title3">如果无法点击以上链接，请将以下链接复制到浏览器中。</div>
        <a style="margin-bottom: 29px" href="{{.Url}}"> {{.Url}}</a>
        <div class="title4">注意： 收到此电子邮件是由于您在我们的网站上注册申请或接受我们的入驻邀请。从这里确认只是确认您的电子邮件 ID 是正确的！</div>
        <div class="title5">如果您从未访问过化工球或没有进行过上述操作，请忽略此邮件。</div>
        <div class="title6">欢迎入驻化工球，我们很荣幸为您提供最好的贸易服务。</div>
        <div class="footer">
          <div class="footer_title1">(0571) 8627 3270</div>
          <div class="footer_title2">Copyright © 2021 杭州亿渡网络科技有限公司 All Right Reserved.</div>
        </div>
      </div>
    </div>
  </body>
</html>
```

验证邮箱英文：

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Go Web</title>
    <style>
      * {
        box-sizing: border-box;
      }

      .outer {
        padding-left: 30px;
        padding-top: 20px;
      }
      .main_container {
        width: 480px;
        height: 640px;
        position: relative;
        font-size: 12px;
        padding: 0 30px;
        background: url(https://cbstyle.oss-cn-shanghai.aliyuncs.com/static/email_template_bg.svg) no-repeat;
        background-position: 0px 130px;
        background-color: #f9fafc;
      }
      .main_container {
        padding: 0 30px;
        padding-bottom: 80px;
      }
      .top_container {
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e3ebf6;
      }
      .main_container .top_container img {
        width: 198px;
        height: 43px;
      }
      .top_text {
        width: 158px;
        font-size: 12px;
        line-height: 17px;
        color: #6e84a3;
      }
      .title {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        margin-top: 42px;
        margin-bottom: 29px;
      }
      .title2 {
        margin-bottom: 29px;
      }
      .hover1 {
        margin-bottom: 39px;
        color: #2e6fd1;
      }
      .title3 {
        margin-bottom: 39px;
      }
      .title4 {
        margin-bottom: 29px;
      }
      .title5 {
        margin-bottom: 49px;
      }
      .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(90deg, #389eeb 0%, #2e6fd1 100%);
        text-align: center;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="main_container">
        <div class="top_container">
          <img src="https://style.chemball.com/static/logo_en.svg" alt="" />
          <div class="top_text">Being a professional service provider makes trade easier</div>
        </div>
        <div class="title">Dear&nbsp;&nbsp;{{.SingleUser}}</div>
        <div class="title2">Thank you for registering the chemical ball platform. Please click the following link to verify your email.</div>
        <a class="hover1" href="{{.Url}}"> Click here>> </a>
        <div class="title3">If you unable click the link, please copy the following link to your browser.</div>
        <a style="margin-bottom: 29px" href="{{.Url}}"> {{.Url}}</a>
        <div class="title4">Note: you received this email because you registered on our website or accepted our invitation to settle in. Confirmation from here just confirms that your email is correct！</div>
        <div class="title5">If you have never visited the chemball or have not done the above, please ignore this email.</div>
        <div class="title6">Welcome to Chemball. We are honored to provide you with the best trade service.</div>
        <div class="footer">
          <div class="footer_title1">(0571) 8627 3270</div>
          <div class="footer_title2">Copyright © 2021 Hangzhou Yidu Network Technology Co., Ltd All Right Reserved.</div>
        </div>
      </div>
    </div>
  </body>
</html>
```
