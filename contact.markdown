---
layout: default 
title: Contact Hotelhelp
subtitle: Exclusive outsourcing to the hospitality industry
permalink: /contact
---


<div id="about" class="plus-tile-tx">
	<div class="container thiner py-4">
		<h2 class="mt-0">Providing 5 star hospitality for over 25 years</h2>
		<p>Thank you for choosing Hotelhelp! Speak to us and you’ll find that we are unlike most hospitality job firms you’ve worked with. If you have any questions, comments, or suggestions, reach out and we will contact you promptly.</p>
	</div>
	<div class="container">
		<div class="flex fx-wrap cards pt-0">
			<div class="fx-item-2 fx-item-sm-1">
				<h3>Reach out to a team member. We're here to serve you.</h3>
				{% for item in site.data.team %}
				<div class="team-member">
					<p class="name">
						<h4>{{ item.name }}</h4>
						{% if item.linkedin %}
							<a href="{{ item.linkedin }}" target="_blank">{% include_relative assets/linkedin-icon.html %}</a>
						{% endif %}
					</p>
					<p class="title">{{ item.title }}</p>
					<p class="email"><a href="mailto:{{ item.email }}">{{ item.email }}</a></p>
					<p class="phone">O: <a href="tel:{{ item.phone }}">{{ item.phone }}</a></p>
					{% if item.phone2 %}
						<p class="phone">C: <a href="tel:{{ item.phone2 }}">{{ item.phone2 }}</a></p>
					{% endif %}
					{% if item.fax %}
	    				<p class="fax">Fax: <a href="fax:{{ item.fax }}">{{ item.fax }}</a></p>
					{% endif %}
				</div>
				{% endfor %}
			</div>
			<div class="fx-item-2 fx-item-sm-1 px-3">
				<form
				  name="contact"
				  action="/thanks"
				  method="POST"
				  data-netlify-recaptcha="true"
				  data-netlify="true"
				>
					<p>
						<label><span>Your Name:</span>
							<input type="text" name="name" />
						</label>
					</p>
					<p>
						<label><span>Your Email:</span>
							<input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							<span>Your Role:</span>
							<select name="role[]">
								<option value="leader">Leader</option>
								<option value="follower">Follower</option>
							</select>
						</label>
					</p>
					<p>
						<label>
							<span>Add file:</span>
							<input name="file" type="file"/>
							<span class="note">1 file - Max size 8 MB.</span>
						</label>
					</p>
					<p>
						<label>
							<span>Message:</span>
							<textarea name="message"></textarea>
						</label>
					</p>
					<p>
						<div data-netlify-recaptcha="true"></div>
					</p>
					<p>
						<button class="btn" type="submit">Send</button>
					</p>	
				</form>
			</div>
		</div>
	</div>
</div>