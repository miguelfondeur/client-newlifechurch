{
	"title": "New Life Baptist Church | Prayer Requests",
	"description": "",
	"header": "Prayer Requests",
	"type": "page",
	"layout": "single",
	"cannonical": "/prayer-requests.html"
}
<section class="interior-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<h4>Prayer Request Form</h4>
				<form name="contact" method="POST" action="/thankyou.html" netlify>
					<div class="site-input">
						<label for="name">Your Name <abbr title="required">*</abbr></label>
						<input id="name" type="text" name="name" placeholder="Ex: Firstname Lastname" required>
					</div>
					<div class="site-input">
						<label for="email">Your Email <abbr title="required">*</abbr></label>
						<input id="email" type="email" name="email" placeholder="Ex: Firstname Lastname" required>
					</div>	
					<div class="site-input">
						<label for="subject">Subject</label>
						<input id="subject" type="text" name="subject" placeholder="Ex: New Job, Family Health">
					</div>
					<div class="site-input">
						<label for="message">Your Request</label>
						<textarea id="message" rows="4" cols="50" name="message" placeholder="Please describe your prayer request. We'll be praying for you."></textarea>
					</div>
					<div data-netlify-recaptcha></div>
					<button type="submit" class="button blue float-right">Send Prayer Request</button>
				</form>
			</div>
			<div class="col-xs-12 col-sm-4 col-md-5 col-md-offset-1">
				<img src="images/slideshow/3.jpg" class="thumbnail">
			</div>
		</div>
	</div>
</section>