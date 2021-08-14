/*
Language: yatt_lite
Requires: xml.js, perl.js
Author: Kobayasi, Hiroaki <buribullet@gmail.com>
Contributors:
Description: highlight.js syntax definition for yatt_lite
Website: https://github.com/hkoba/highlightjs-yatt_lite
*/

'use strict';

function hljsDefineYattLite(hljs) {
  // XXX: namespace customization
  const yattDeclaration = (className, keywords, starts) => {
    const begin = new RegExp(`<!yatt:(${keywords.join('|')})\\b`);
    return {
      className, scope: className,
      begin, end: />\n/, returnBegin: true,
      scope: 'declaration', className: 'yatt-declaration',
      subLanguage: 'xml',
      starts: {...starts, end: /^(?=<!yatt:)/, returnEnd: true}
    }
  };

  return {
    name: "yatt_lite",
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT(
        /<!--#yatt\b/, /-->/
      ),
      yattDeclaration(
        'yatt-widget', ['widget', 'page', 'args'],
        {subLanguage: 'xml'}
      ),
      yattDeclaration(
        'yatt-action-perl', ['action'],
        {subLanguage: 'perl'}
      ),
    ]
  }
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = hljsDefineYattLite;
}
