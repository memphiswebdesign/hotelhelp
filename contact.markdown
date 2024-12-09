---
layout: default 
title: Contact HOTELhelp
subtitle: Exclusive outsourcing to the hospitality industry
permalink: /contact
---


<div id="contact" class="plus-tile-tx">
	<div class="container center thiner pt-1 pb-4">
		<h1 class="mt-0">Providing 5 star hospitality for over 25 years</h1>
		<p>Thank you for choosing HOTELhelp! Speak to us and you’ll find that we are unlike most hospitality job firms you’ve worked with. If you have any questions, comments, or suggestions, reach out and we will contact you promptly.</p>
	</div>
	<div class="container">
		<div class="flex fx-wrap cards pt-0">
			<div class="fx-item-2 fx-item-md-1 px-1 px-sm-0 mb-3">
				<pre>We're here to serve you</pre>
				<h2>Reach out to a team member.</h2>
				<hr>
				<div class="flex fx-wrap">
				{% for item in site.data.team %}
				<div class="team-member">
					<div class="name">
						<h4>{{ item.name }}</h4>
						{% if item.linkedin %}
							<a href="{{ item.linkedin }}" target="_blank">{% include_relative assets/linkedin-icon.html %}</a>
						{% endif %}
					</div>
					<p class="title">{{ item.title }}</p>
					{% if item.email %}
						<p class="email"><a href="mailto:{{ item.email }}">{{ item.email }}</a></p>
					{% endif %}
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
			</div>
			<div class="form-col fx-item-2 fx-item-md-1 px-3 px-md-0 mb-4">
				<div class="form-wrap">
					<h3>Contact us:</h3>
					<div class="general-contact">
						<a href="https://www.google.com/maps/place/894+N+Germantown+Pkwy+%232,+Cordova,+TN+38018" target="_blank">894 North Germantown Parkway (Suite 2) Cordova, TN 38018</a>
						<a href="mailto:hotelhelpservices.com">info@hotelhelpservices.com</a>
						<a href="tel:9016245000">Tel: 901-624-5000</a>
					</div>
					<form
					  name="contact"
					  action="/thanks"
					  method="POST"
					  data-netlify-recaptcha="true"
					  data-netlify="true"
					>
						<p>
							<label><span>Full Name:</span>
								<input type="text" name="name" required />
							</label>
						</p>
						<p>
							<label><span>Email:</span>
								<input type="email" name="email" required />
							</label>
						</p>
						<p>
							<label><span>Phone:</span>
								<input type="tel" name="phone" required />
							</label>
						</p>
						<p>
							<label>
								<span>How can we help?</span>
								<select name="role[]">
									<option value="general">General Contact</option>
									<option value="job">Looking for a Job</option>
									<option value="outsourcing">Looking for Outsourcing</option>
								</select>
							</label>
						</p>
						<!-- <p>
							<label>
								<span>Add file:</span>
								<input name="file" type="file"/>
								<span class="note">1 file - Max size 8 MB.</span>
							</label>
						</p> -->
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
</div>