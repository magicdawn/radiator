{% extends "../../global/view_build/basic.swig" %}

{# vars #}
{% set js = '/index/js/main/index_77910bb1.js' %}
{% set css = '/index/css/main/post_0e260933.css' %}
{% set title = 'Post' %}

{# body #}
{% block body %}

  <div class="container">
    <article class="markdown-body">
      {{ content | safe }}
    </article>
  </div>

{% endblock %}