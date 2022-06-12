import json
from rest_framework.renderers import JSONRenderer


class ProfileJSONRenderer(JSONRenderer):
    charset = "utf-8"

    def render(self, data, accepted_media_types=None, renderer_context=None):
        errors = data.get("errors", None)
        if errors is not None:
            return super(ProfileJSONRenderer, self).render(data)

        return json.dumps({"profile": data})


"""
Allows response to come as 
        {
	"profile": {
		"username": "obicubana",
		"first_name": "Obi",
		"last_name": "Cubana",
		"full_name": "Obi Cubana",
		"email": "obicubana@gmail.com",
		"id": "30af3aeb-12bc-4c60-90de-a06a1267f1d6",
		"phone_number": "+2349053234262",
		"profile_photo": "http://localhost:8000/mediafiles/profile_default.png",
		"about_me": "Magnate of Cubana empire",
		"license": null,
		"gender": "Male",
		"country": "Nigeria",
		"city": "Abuja",
		"is_buyer": false,
		"is_seller": false,
		"is_agent": true,
		"rating": null,
		"num_reviews": 0,
		"reviews": [],
		"top_agent": true
	}
}"""