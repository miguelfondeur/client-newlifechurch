{
	"title": "New Life Baptist Church | Book Our Venues",
	"description": "",
	"header": "Request a Venue",
	"type": "page",
	"layout": "single",
	"cannonical": "/venues.html"
}
<section class="interior-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<p>To request one of our venues, please complete the form below.</p>
				<form name="contact" method="POST" action="/thankyou.html" netlify>
					<div class="site-input">
						<label for="name">Your Name <abbr title="required">*</abbr></label>
						<input id="name" type="text" name="name" placeholder="Ex: Firstname Lastname" required>
					</div>
					<div class="site-input">
						<label for="email">Your Email <abbr title="required">*</abbr></label>
						<input id="email" type="email" name="email" placeholder="Ex: example@email.com" required>
					</div>				
					<div class="site-input">
						<label for="venues">Which Venue would you like to Reserve ? <abbr title="required">*</abbr></label>
						<select id="venues" name="venues">
							<option>Click to Select</option>
							<option value="dream-center">Annie Streater Dream Center</option>
							<option value="life-center">Sarah Gantt Family Life Center</option>
							<option value="sanctuary">New Life Church Sanctuary</option>
							<option value="multiple-venues">I would like to reserve multiple venues</option>
						</select>
					</div>
					<div class="site-input">
						<label for="subject">Event Name: <abbr title="required">*</abbr></label>
						<input id="subject" type="text" name="subject" placeholder="Ex: Wedding">
					</div>
					<div class="site-input">
						<label for="message">Event Description <abbr title="required">*</abbr></label>
						<textarea id="message" rows="4" cols="50" name="message" placeholder="Short description of your event and your needs"></textarea>
					</div>
					<div data-netlify-recaptcha></div>
					<br><br>
					<button type="submit" class="button blue float-right">Request Venue</button>
				</form>
			</div>
			<div class="col-xs-12 col-sm-4 col-md-5 col-md-offset-1">
				<img src="images/sanctuary.jpg" class="thumbnail">
				<img src="images/wes2.jpg" class="thumbnail">
				<img src="images/dreamcenter.jpg" class="thumbnail">
			</div>
		</div>
	</div>
</section>