from rest_framework import permissions

class IsAuthorOrAdminOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
         if request.method in permissions.SAFE_METHODS:
            return True
         elif request.method == "delete":
            return obj.user == request.user or request.user.is_staff
         if request.method == "POST":
            return True


            

        # return obj.author == request.user or request.user.is_admin 