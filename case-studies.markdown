---
layout: default 
title: Case Studies
subtitle: Partnering with all brands - providing real results
permalink: /case-studies
---
<div id="case-studies" class="plus-tile-tx">
	<!-- Isotope JS Filters -->
	<!-- <div class="container">
		<div class="filters">
			<ul class="center">
				<li class="btn ghost active" data-filter="*">All</li>
				<li data-filter=".one" class="btn ghost">Filter 1</li>
				<li data-filter=".two" class="btn ghost">Filter 2</li>
				<li data-filter=".three" class="btn ghost">Filter 3</li>
			</ul>
		</div>
	</div> -->
	<!-- Isotope JS Grid -->
	<!-- <div class="container">
		<div class="flex fx-apart fx-wrap cards center grid">
			<div class="grid-sizer"></div>
			{% for case in site.case %}
			<div class="grid-item {{ case.cat }}">
				<div class="card-item">
					<a class="card-link" href="{{ case.url }}" alt="{{ case.title }}"></a>
					<div class="card-image">
						<img class="" src="{{ case.img }}" alt="{{ case.title }}" />
					</div>
					<div class="card-meta">
						<h4>{{ case.title }}</h4>
						<p>{{ case.meta }}</p>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
	</div> -->
	<div class="container">
		<div class="flex fx-wrap cards center">
			{% for case in site.case %}
			<div class="fx-item-3 fx-item-sm-2 {{ case.cat }}">
				<div class="card-item">
					<a class="card-link" href="{{ case.url }}" alt="{{ case.title }}"></a>
					<div class="card-image">
						<img class="" src="{{ case.img }}" alt="{{ case.title }}" />
					</div>
					<div class="card-meta">
						<h4>{{ case.title }}</h4>
						<p>{{ case.meta }}</p>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
	</div>
</div>

{% include staffing-cta.html %}