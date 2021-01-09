{
	"title": "New Life Baptist Church | Giving Statements",
	"description": "",
	"header": "Giving Statements",
	"cannonical": "/yearendgiving.html"
}
<section class="interior-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h4>Giving Statement Tax Form</h4>
				<form name="giving-statements" method="POST" action="/thankyou.html" netlify>
					<div class="site-input">
						<label for="giving-number">Your Name <abbr title="required">*</abbr></label>
						<input id="giving-number" type="text" name="name" placeholder="Ex: Firstname Lastname" required>
					</div>
					<div class="site-input">
						<label for="email">Your Email <abbr title="required">*</abbr></label>
						<input id="email" type="email" name="email" placeholder="Ex: Firstname Lastname" required>
					</div>	
					<div class="site-input">
						<label for="phone">Phone Number</label>
						<input id="phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="999-999-9999">
					</div>
                    <div class="site-input">
						<label for="giving-number">Your Giving Number</label>
						<input id="giving-number" type="text" name="giving-number" placeholder="">
					</div>
                    <p>Do you prefer form to be mailed or emailed?</p>
					<div class="site-input">
						<label for="message">Your Address</label>
						<textarea id="message" rows="4" cols="50" name="message" placeholder="Please Your Address Here. Street, City, State, Zip"></textarea>
					</div>
					<div data-netlify-recaptcha></div>
					<button type="submit" class="button blue float-right" style="margin-bottom: 30px;">Request Giving Statement</button>
				</form>
			</div>
		</div>
	</div>
</section>
