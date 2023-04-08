from rest_framework import serializers
from .models import Rating


class RatingSerializer(serializers.ModelSerializer):
    # how to serialize from multiple tables (FK and OnetoOne Fields)
    rater = serializers.SerializerMethodField(read_only=True)
    agent = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Rating
        exclude= ["updated_at", "pkid"]

    #when creating serializer method fields start with get_* then exact name of field
    def get_rater(self, obj):
        #rater is tied to Auth_USER_MODEL so we can get rater.username
        return obj.rater.username

    def get_agent(self, obj):
        #agent is tied to Profile Model so we can get agent.user which is then tied to Auth_USER to get agent.user.username
        return obj.agent.user.username