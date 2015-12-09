{% extends "../../global/view/basic.swig" %}

{# vars #}
{% set title = '首页' %}
{% set description = 'A simple Blog' %}

{# body #}
{% block body %}

<section id="top">
  <div id="heading">
    <div id="logo">{{ title }}</div>
    <div id="tagline">{{ description }}</div>
  </div>
</section>

{% for p in posts %}
<section>
  <div class="content">
    <div class="title">{{ p.title }}</div>
    <div class="date">{{ p.date | datetime }}</div>
    <ul class="tags">
      {% for t in t.tags %}
        {{ t }}
      {% endfor %}
    </ul>
    <article>
      {{ p.fileContent | marked | safe }}
    </article>
  </div>
</section>
{% endfor %}


<script src="/global/js/main/index.js"></script>
<script src="/index/js/main/index.js"></script>
{% endblock %}
