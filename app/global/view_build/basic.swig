<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
</head>
<body>
  <link rel="stylesheet" href="/global/css/main/base_b1c2c058.css">
  {% if css %}
    <!-- add single css -->
    <link rel="stylesheet" href="{{ css }}">
  {% endif %}
  {% block css %}
    <!-- add more css -->
  {% endblock %}

  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Magicdawn</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Home</a></li>
      </ul>
      <ul class="nav navbar-nav pull-right">
        <li><a target='_blank' href="http://github.com/magicdawn">GitHub</a></li>
      </ul>
    </div>
  </nav>

  {# body placeholder #}
  {% block body %}
  {% endblock %}

  <script type="text/javascript" src='/global/js/main/index_99224815.js'></script>
  {% if js %}
    <!-- add single js -->
    <script src='{{ js }}' type="text/javascript"></script>
  {% endif %}
  {% block js %}
    <!-- add more js -->
  {% endblock %}
</body>
</html>