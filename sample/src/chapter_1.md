# Chapter 1

```yatt_lite
<!yatt:args x y>
<h2>foo</h2>
&yatt:x;

<!yatt:action bar>
print "This is a perl code\n";

<!yatt:page foo a b>
<yatt:bar a b='xx'/>

<!yatt:widget baz a b>
<h2>&yatt:a;</h2>
&yatt:b;
```
