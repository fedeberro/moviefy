export const recoveryEmailBody = (username, token, email) => {
  const link = `https://my-moviefy.vercel.app/iniciar-sesión/restablecer-contraseña?email=${email}`;
  return `<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .mj-outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->

    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
    </style>
    <!--<![endif]-->

    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>

    <style type="text/css"></style>
    <style type="text/css">
      .hide_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_mobile {
          display: block !important;
        }
      }
      .hide_section_on_mobile {
        display: none !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_mobile {
          display: table !important;
        }

        div.hide_section_on_mobile {
          display: block !important;
        }
      }
      .hide_on_desktop {
        display: block !important;
      }
      @media only screen and (min-width: 480px) {
        .hide_on_desktop {
          display: none !important;
        }
      }
      .hide_section_on_desktop {
        display: table !important;
        width: 100%;
      }
      @media only screen and (min-width: 480px) {
        .hide_section_on_desktop {
          display: none !important;
        }
      }

      p,
      h1,
      h2,
      h3 {
        margin: 0px;
      }

      ul,
      li,
      ol {
        font-size: 11px;
        font-family: Ubuntu, Helvetica, Arial;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      @media only screen and (max-width: 480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100% !important;
        }
        .mj-column-per-100 > .mj-column-per-100 {
          width: 100% !important;
          max-width: 100% !important;
        }
      }
    </style>
  </head>
  <body style="word-spacing: normal; background-color: #ffffff">
    <div style="background-color: #ffffff">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#dc2626" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
        style="
          background: #dc2626;
          background-color: #dc2626;
          margin: 0px auto;
          border-radius: 32px 32px 0px 0px;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            background: #dc2626;
            background-color: #dc2626;
            width: 100%;
            border-radius: 32px 32px 0px 0px;
          "
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 10px 0px 10px 0px;
                  text-align: center;
                "
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 15px 15px 15px 15px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <h1
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 22px;
                                text-align: center;
                              "
                            >
                              <span
                                style="
                                  color: rgb(255, 255, 255);
                                  font-size: 32px;
                                "
                                ><strong
                                  ><span style="font-family: Ubuntu, sans-serif"
                                    >Recuperá tu contraseña</span
                                  ></strong
                                ></span
                              >
                            </h1>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#F5F5F5" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <div
        style="
          background: #f5f5f5;
          background-color: #f5f5f5;
          margin: 0px auto;
          border-radius: 0px 0px 32px 32px;
          max-width: 600px;
        "
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="
            background: #f5f5f5;
            background-color: #f5f5f5;
            width: 100%;
            border-radius: 0px 0px 32px 32px;
          "
        >
          <tbody>
            <tr>
              <td
                style="
                  direction: ltr;
                  font-size: 0px;
                  padding: 10px;
                  text-align: center;
                "
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->

                <div
                  class="mj-column-per-100 mj-outlook-group-fix"
                  style="
                    font-size: 0px;
                    text-align: left;
                    direction: ltr;
                    display: inline-block;
                    vertical-align: top;
                    width: 100%;
                  "
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align: top"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 15px 15px 15px 15px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: Ubuntu, Helvetica, Arial, sans-serif;
                              font-size: 13px;
                              line-height: 1.5;
                              text-align: left;
                              color: #000000;
                            "
                          >
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <span style="font-size: 16px">Hola ${username},</span>
                            </p>
                            <br />
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <span style="font-size: 16px"
                                >Recibimos una solicitud para
                                <strong
                                  >restablecer tu contraseña en Moviefy</strong
                                >. Para completar el proceso, por favor utiliza
                                el siguiente token de verificación:</span
                              >
                            </p>
                            <br />
                            <h2
                              style="
                                font-family: Ubuntu, Helvetica, Arial;
                                font-size: 17px;
                                text-align: center;
                              "
                            >
                              <span style="font-size: 16px"
                                ><span
                                  style="color: rgb(0, 0, 0); font-size: 32px"
                                  >${token}</span
                                ></span
                              >
                            </h2>
                            <br />
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <span style="font-size: 16px"
                                >Ingresá este token en
                                <span style="color: rgb(224, 62, 45)"
                                  ><a
                                    style="color: rgb(224, 62, 45)"
                                    href=${link}
                                    target="_blank"
                                    rel="noopener"
                                    >este link</a
                                  ></span
                                >
                                para restablecer tu contraseña. Si no fuiste vos
                                quien solicitó el restablecimiento de la
                                contraseña, por favor ignorá este mensaje.</span
                              >
                            </p>
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <br /><span style="font-size: 16px"
                                >Saludos,</span
                              >
                            </p>
                            <p
                              style="
                                font-family: Ubuntu, sans-serif;
                                font-size: 11px;
                              "
                            >
                              <span style="font-size: 16px">Moviefy</span>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!--[if mso | IE]></td></tr></table><![endif]-->
    </div>
  </body>
</html>
`;
};
