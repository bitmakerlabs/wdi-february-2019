import requests
import socket
import sys

class BikeShareAPI:

  @classmethod
  def stations(cls):
    url      = 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information'
    response = cls.get(url)
    data     = response.json()
    return data['data']['stations']

  @classmethod
  def statuses(cls):
    url      = 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status'
    response = cls.get(url)
    data     = response.json()
    return data['data']['stations']

  @classmethod
  def get(cls, url):
    try:
      return requests.get(url)
    except socket.error:
      print("Request failed")
      print("Please ensure network connectivity")
      sys.exit(1)
