---
layout: default 
title: Latest News
subtitle: Stay updated with latesting post, tips & industry insights
permalink: /news
---


<div id="news" class="plus-tile-tx">
	<div class="container">
		<ul class="list-clear flex fx-apart fx-wrap cards pt-0">
			{% for post in site.posts %}
			<li class="fx-item-2 fx-item-xs-1">
				<div class="card-item">
					<a class="card-link" href="{{ post.url }}"></a> 
					<div class="card-image">
						<img src="{{ post.img }}" />
					</div>
					<div class="card-meta lg">
						<h2>{{ post.title }}</h2>
						<p>{{ post.meta }}</p>
					</div>
				</div>
			</li>
			{% endfor %}
		</ul>
	</div>
</div>