# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet
import os

class ActionOfferMoreFlights(Action):
    def name(self):
        return "action_offer_more_flights"

    def run(self, dispatcher, tracker, domain):
        message = "I understand. If you're looking for more options, you can view our full list of flights [here](http://localhost:4200/homepage#flights-list). Feel free to check them out and let me know if you need any further assistance!"
        dispatcher.utter_message(text=message)

        return []


class ActionRecommendFlights(Action):

    def name(self) -> Text:
        return "action_recommend_flights"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        # Get the current file's directory
        image_path = "http://localhost:4200/assets/"

        # Construct the relative path to the img folder
        flight1_image_path = os.path.join(image_path, "Madrid.jpg")
        flight2_image_path = os.path.join(image_path, "Vienna.jpg")
        flight3_image_path = os.path.join(image_path, "Copenhagen.jpg")

        # URLs for three most popular flights
        flight1_url = "http://localhost:4200/flight-details/Rome"
        flight2_url = "http://localhost:4200/flight-details/Vienna"
        flight3_url = "http://localhost:4200/flight-details/Copenhagen"

        new_carousel = {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Rome",
                        "subtitle": "$150",
                        "image_url": flight1_image_path,
                        "buttons": [
                            {
                                "title": "Book flight",
                                "url": flight1_url,
                                "type": "web_url"
                            }
                        ]
                    },
                    {
                        "title": "Vienna",
                        "subtitle": "$120",
                        "image_url": flight2_image_path,
                        "buttons": [
                            {
                                "title": "Book flight",
                                "url": flight2_url,
                                "type": "web_url"
                            }
                        ]
                    },
                    {
                        "title": "Copenhagen",
                        "subtitle": "$340",
                        "image_url": flight3_image_path,
                        "buttons": [
                            {
                                "title": "Book flight",
                                "url": flight3_url,
                                "type": "web_url"
                            }
                        ]
                    }
                ]
            }
        }

        dispatcher.utter_message(text="Here are some of our popular flights:", attachment=new_carousel)

        return []
    
class ActionFAQ(Action):
    def name(self):
        return "action_faq"

    def run(self, dispatcher, tracker, domain):
        message = "It sounds like you have some questions! You can find answers to frequently asked questions on our FAQ page [here](http://localhost:4200/faq). If you don't find what you're looking for, feel free to ask me directly!"
        dispatcher.utter_message(text=message)

        return []
    
class ActionContact(Action):
    def name(self):
        return "action_contact"

    def run(self, dispatcher, tracker, domain):
        message = "You can find our contact information [here](http://localhost:4200/contact). If you need further assistance, feel free to ask!"
        dispatcher.utter_message(text=message)

        return []
    
class ActionFindFlight(Action):
    def name(self) -> Text:
        return "action_find_flight"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        allowed_destinations = {"barcelona", "barça", "paris", "rome", "berlin", "vienna", "amsterdam", "prague", "zurich", "budapest", "copenhagen"}

        # Extract destination entity from user input
        destination = next(tracker.get_latest_entity_values("destination"), None)

        # Normalize the destination for comparison
        if destination:
            normalized_destination = destination.lower()
        else:
            normalized_destination = None

        if normalized_destination in allowed_destinations:
            image_path = "http://localhost:4200/assets/"

            flight_image_path = os.path.join(image_path, f"{destination}.jpg")
            flight_url = f"http://localhost:4200/flight-details/{destination}"
    
            new_carousel = {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [
                        {
                            "title": destination,
                            "subtitle": "Here",
                            "image_url": flight_image_path,
                            "buttons": [
                                {
                                    "title": "Book flight",
                                    "url": flight_url,
                                    "type": "web_url"
                                }
                            ]
                        }
                    ]
                }    
            }
            
            dispatcher.utter_message(text="This flight might interest you then:", attachment=new_carousel)              
        else:
            response = "I'm sorry, I couldn't understand the destination. Can you check your spelling and write again?"
            dispatcher.utter_message(text=response)
        
        return []