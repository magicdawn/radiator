{% extends "../../global/view/basic.swig" %}

{# vars #}
{% set js = '/index/js/main/index.js' %}
{% set css = '/index/css/main/index.css' %}
{% set title = '首页' %}
{% set description = 'A simple Blog' %}

{# body #}
{% block body %}

<div class="container">
  <ul class="posts">
    {% for p in posts %}
      <li>
        <a href="{{ p.link }}">{{ p.title }}</a>
        <div class="time pull-right">{{ p.date | datetime }}</div>
      </li>
    {% endfor %}
  </ul>
</div>

{% endblock %}