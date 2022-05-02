---
layout: default 
title: Latest News
subtitle: Stay updated with latesting post, tips & industry insights
permalink: /news
---


<div id="news" class="plus-tile-tx">
	<div class="container">
		<ul>
			{% for post in site.posts %}
			<li>
				<a href="{{ post.url }}">
					<img src="{{ post.img }}" />
					<h2>{{ post.title }}</h2>
					<p>{{ post.meta }}</p>
				</a>
			</li>
			{% endfor %}
		</ul>
	</div>
</div>