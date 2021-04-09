---
title: "TGIF MonoM"
---

<header style="background-color: black;">
<a href="{{ '/' | url }}"><img src="{{ '/img/logo.png' | url }}" alt="MonoM logo"></a>
</header>

<ul>
{%- for tgif in collections.tgif -%}
    <li><a href="{{ tgif.url | url }}">{{ tgif.data.title }}</a></li>
{%- endfor -%}
</ul>
