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
  return {
    name: "yatt_lite",
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT(
        /<!--#yatt\b/, /-->/
      ),
      {
        scope: 'yatt-widget',
        begin: /^<!yatt:(widget|page|args)\b[^>]*>\n/s,
        end: /^(?=<!yatt:)/, excludeEnd: true,
        subLanguage: 'xml'
      },
      {
        scope: 'yatt-action-perl',
        begin: /^<!yatt:action\b[^>]*>\n/s, excludeBegin: true,
        end: /^(?=<!yatt:)/, excludeEnd: true,
        subLanguage: 'perl'
      },
      {
        scope: 'yatt-entity-perl',
        begin: /^<!yatt:entity\b[^>]*>\n/s, excludeBegin: true,
        end: /^(?=<!yatt:)/, excludeEnd: true,
        subLanguage: 'perl'
      }
    ]
  }
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  module.exports = function(hljs) {
    hljs.registerLanguage('yatt_lite', hljsDefineYattLite);
  }
}
