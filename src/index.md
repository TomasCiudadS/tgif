---
title: "TGIF MonoM"
---
# TGIF MonoM

<ul>
{%- for tgif in collections.tgif -%}
    <li><a href="{{ tgif.url }}">{{ tgif.data.title }}</a></li>
{%- endfor -%}
</ul>
