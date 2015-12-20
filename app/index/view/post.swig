{% extends "../../global/view/basic.swig" %}

{# vars #}
{% set js = '/index/js/main/index.js' %}
{% set css = '/index/css/main/post.css' %}
{% set title = 'Post' %}

{# body #}
{% block body %}

  <div class="container">
    <article class="row">
      {{ content | safe }}
    </article>
  </div>

{% endblock %}