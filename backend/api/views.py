from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
@permission_classes([AllowAny])
def greet(request):
    name = request.data.get('name', '').strip()

    if not name:
        return Response(
            {'error': 'Name is required.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    return Response({
        'name': name,
        'message': f'Hello, {name}!'
    })